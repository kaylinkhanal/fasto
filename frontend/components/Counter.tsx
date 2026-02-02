'use client'


import {
    decrement,
    increment,
    incrementByAmount,
} from '../lib/features/counter/counterSlice'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">Redux Counter</h2>
            <div className="flex items-center gap-4">
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
                <span className="text-2xl font-mono">{count}</span>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Add 5
                </Button>
            </div>
        </div>
    )
}
