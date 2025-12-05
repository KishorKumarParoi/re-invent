import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

const VisitorCount = () => {
    const [count, setCount] = useState(0)
    const [displayCount, setDisplayCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const [subscribing, setSubscribing] = useState(false)
    const counterRef = React.useRef(null)
    const containerRef = React.useRef(null)
    const countObjRef = React.useRef({ value: 0 })
    const [placeholder, setPlaceholder] = useState("Let's have a coffee together ☕")
    const inputRef = React.useRef(null)

    useEffect(() => {
        const trackVisitor = async () => {
            try {
                const todayKey = `visited_${new Date().toDateString()}`
                const hasVisitedToday = localStorage.getItem(todayKey)

                if (!hasVisitedToday) {
                    console.log('🆕 New visitor this session, attempting to increment...')

                    try {
                        const { data, error: rpcError } = await supabase
                            .rpc('increment_visitors')

                        if (!rpcError) {
                            console.log('✅ RPC Success. Count:', data)
                            setCount(data || 0)
                            localStorage.setItem(todayKey, 'true')
                            return
                        }
                        console.warn('⚠️ RPC failed:', rpcError.message)
                    } catch (rpcErr) {
                        console.warn('⚠️ RPC error:', rpcErr.message)
                    }

                    console.log('📝 Falling back to manual increment...')
                    const { data: current, error: fetchError } = await supabase
                        .from('visitors')
                        .select('count')
                        .eq('id', 1)
                        .single()

                    if (fetchError) {
                        console.error('❌ Fetch error:', fetchError)
                        throw fetchError
                    }

                    const currentCount = current?.count || 0
                    const newCount = currentCount + 1

                    const { error: updateError } = await supabase
                        .from('visitors')
                        .update({ count: newCount })
                        .eq('id', 1)

                    if (updateError) {
                        console.error('❌ Update error:', updateError)
                        throw updateError
                    }

                    console.log('✅ Manual increment success. New count:', newCount)
                    setCount(newCount)
                    localStorage.setItem(todayKey, 'true')
                } else {
                    console.log('👤 Already counted today, fetching current count...')
                    const { data: current, error: fetchError } = await supabase
                        .from('visitors')
                        .select('count')
                        .eq('id', 1)
                        .single()

                    if (fetchError) {
                        console.error('❌ Fetch error:', fetchError)
                        throw fetchError
                    }

                    console.log('✅ Fetch success. Current count:', current?.count)
                    setCount(current?.count || 0)
                }
            } catch (error) {
                console.error('❌ Fatal error:', error.message)
                setError(error.message)
                setCount(0)
            } finally {
                setLoading(false)
            }
        }

        trackVisitor()
    }, [])

    // Animate counter when count changes
    useEffect(() => {
        if (count > 0) {
            countObjRef.current.value = displayCount

            const tl = gsap.timeline()

            tl.to(
                countObjRef.current,
                {
                    value: count,
                    duration: 2.5,
                    ease: 'power2.out',
                    onUpdate: function () {
                        const displayValue = Math.floor(countObjRef.current.value)
                        setDisplayCount(displayValue)
                        if (counterRef.current) {
                            counterRef.current.textContent = displayValue.toLocaleString()
                        }
                    }
                }
            )

            return () => {
                tl.kill()
            }
        }
    }, [count, displayCount])

    useEffect(() => {
        const placeholders = [
            "Let's have a coffee together ☕",
            "Drop your email & let's connect 💌",
            "Join the tech community 🚀",
            "Stay in touch with me 🤝",
            "Get exclusive updates 📬",
            "Let's build something great 🛠️",
        ]

        let index = 0
        const interval = setInterval(() => {
            index = (index + 1) % placeholders.length
            setPlaceholder(placeholders[index])
        }, 4000) // Change every 4 seconds

        return () => clearInterval(interval)
    }, [])

    // Placeholder transition animation
    useEffect(() => {
        if (inputRef.current) {
            gsap.fromTo(
                inputRef.current,
                { opacity: 0.6 },
                { opacity: 1, duration: 0.5, ease: 'power2.inOut' }
            )
        }
    }, [placeholder])

    // Handle email subscription
    const handleSubscribe = async (e) => {
        e.preventDefault()
        setSubscribing(true)

        try {
            // Validate email
            if (!email || !email.includes('@')) {
                setError('Please enter a valid email address')
                setSubscribing(false)
                return
            }

            // Check if email already exists
            const { data: existingEmail, error: checkError } = await supabase
                .from('subscribers')
                .select('*')
                .eq('email', email)
                .single()

            if (existingEmail) {
                setError('This email is already subscribed!')
                setSubscribing(false)
                return
            }

            // Add email to subscribers table
            const { error: insertError } = await supabase
                .from('subscribers')
                .insert([
                    {
                        email: email,
                        subscribed_at: new Date().toISOString(),
                        visitor_number: count
                    }
                ])

            if (insertError) {
                console.error('❌ Insert error:', insertError)
                throw insertError
            }

            console.log('✅ Email subscribed successfully:', email)
            setSubscribed(true)
            setEmail('')
            setError(null)

            // Reset after 3 seconds
            setTimeout(() => {
                setSubscribed(false)
            }, 3000)
        } catch (error) {
            console.error('❌ Subscription error:', error.message)
            setError(error.message)
        } finally {
            setSubscribing(false)
        }
    }

    return (
        <div
            ref={containerRef}
            className='flex flex-col items-center gap-4 py-6 bg-linear-to-b from-blue-800/60 to-slate-200/30 rounded-lg shadow-lg shadow-orange-500/20'
        >
            {/* Welcome Message */}
            <div className='text-center'>
                <h2 className='text-2xl font-bold text-emerald-300 mb-2'>
                    🎉 Thank you for viewing my Portfolio
                </h2>
            </div>

            {/* Visitor Count with Animation */}
            <div className='flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-blue-900/30 to-violet-900/30 border border-blue-400/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300'>
                <span className='text-2xl animate-pulse'>👥</span>
                <div className='flex flex-col'>
                    <span className='font-semibold text-slate-300 tracking-widest'>
                        Total Visitors : {" "}
                        <span className='text-lg font-bold text-emerald-300 min-w-20 inline-block text-right tracking-widest'>
                            {loading ? (
                                <span className='inline-block animate-spin'>⟳</span>
                            ) : (
                                <span ref={counterRef} className='tracking-widest'>0</span>
                            )}
                        </span>
                    </span>
                </div>
            </div>

            {/* Error message */}
            {error && (
                <p className='text-lg text-yellow-600'>
                    Already Subscribed, try another email.
                </p>
            )}

            {/* Success message */}
            {subscribed && (
                <p className='text-xs text-emerald-400 animate-pulse'>
                    ✅ Thanks for subscribing! Check your email.
                </p>
            )}

            {/* Email Subscription Form */}
            <form onSubmit={handleSubscribe} className='w-full max-w-xl px-4'>
                <div className='flex gap-2'>
                    <input
                        ref={inputRef}
                        type='email'
                        placeholder={placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={subscribed || subscribing}
                        className='flex-1 px-4 py-2 rounded-lg tracking-wider font-semibold bg-slate-800/50 border border-blue-900 text-white placeholder-blue-300/50 focus:outline-1 focus:border-emerald-400/60 transition-all disabled:opacity-50'
                    />
                    <button
                        type='submit'
                        disabled={subscribing || subscribed}
                        className='px-4 py-2 rounded-lg bg-emerald-300 cursor-pointer hover:bg-emerald-400 text-black font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {subscribing ? 'Subscribe' : subscribed ? 'Subscribed' : 'Subscribe'}
                    </button>
                </div>
            </form>

            {/* Motivational Message */}
            <p className='text-xs text-blue-200/60 italic'>
                ✨ You're part of{' '}
                <span className='text-emerald-300 font-semibold'>
                    {displayCount.toLocaleString()}
                </span>{' '}
                amazing visitors exploring innovation & tech!
            </p>

            {/* Alternative Newsletter Link */}
            <p className='text-xs text-blue-300'>
                or{' '}
                <a
                    href='https://substack.com/@kkp07'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-emerald-400 hover:underline font-semibold'
                >
                    Subscribe on Substack
                </a>
            </p>
        </div>
    )
}

export default VisitorCount