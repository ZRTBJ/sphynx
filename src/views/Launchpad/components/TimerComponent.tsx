import React, { useEffect, useState, useRef } from 'react'
import { Text } from '@sphynxswap/uikit'

interface TimeProps {
    time?: string;
}

const TimerComponent: React.FC<TimeProps> = ({ time }) => {
    const now = Math.floor(new Date().getTime() / 1000)
    const [index, setIndex] = useState(0)
    const timerRef = useRef<NodeJS.Timeout>();
    const [day, setDay] = useState('0')
    const [hour, setHour] = useState('0')
    const [min, setMin] = useState('0')
    const [sec, setSec] = useState('0')

    useEffect(() => {
        if (time) {
            timerRef.current = setInterval(() => {
                setIndex(i => i <= 0 ? 0 : i - 1)
            }, 1000)
        }

        return () => {
            if (time) {
                clearInterval(timerRef.current!);
            }
        }
    }, [timerRef, setIndex, time])

    useEffect(() => {
        if (time) {
            setIndex(parseInt(time) - now)
        }
    }, [time, setIndex, now])

    useEffect(() => {
        const s = index % 60
        const m = Math.floor(index / 60 % 60)
        const h = Math.floor(index / 60 / 60 % 24)
        const d = Math.floor(index / 60 / 60 / 24)

        if (s < 10)
            setSec(`0${s}`)
        else
            setSec(s.toString())

        if (m < 10)
            setMin(`0${m}`)
        else
            setMin(m.toString())

        if (h < 10)
            setHour(`0${h}`)
        else
            setHour(h.toString())

        if (d < 10)
            setDay(`0${d}`)
        else
            setDay(d.toString())

    }, [index])


    return (
        <Text color='#A7A7CC' fontSize='12px' bold>{day}:{hour}:{min}:{sec}</Text>
    )
}

export default TimerComponent;