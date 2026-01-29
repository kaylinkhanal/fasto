"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample user idle time data (in minutes)
const idleTimeData = [
  { time: "12 AM", idleTime: 45, activeUsers: 120 },
  { time: "1 AM", idleTime: 52, activeUsers: 95 },
  { time: "2 AM", idleTime: 58, activeUsers: 78 },
  { time: "3 AM", idleTime: 65, activeUsers: 62 },
  { time: "4 AM", idleTime: 72, activeUsers: 45 },
  { time: "5 AM", idleTime: 68, activeUsers: 55 },
  { time: "6 AM", idleTime: 45, activeUsers: 120 },
  { time: "7 AM", idleTime: 28, activeUsers: 280 },
  { time: "8 AM", idleTime: 15, activeUsers: 450 },
  { time: "9 AM", idleTime: 12, activeUsers: 520 },
  { time: "10 AM", idleTime: 18, activeUsers: 485 },
  { time: "11 AM", idleTime: 25, activeUsers: 420 },
  { time: "12 PM", idleTime: 35, activeUsers: 380 },
  { time: "1 PM", idleTime: 42, activeUsers: 340 },
  { time: "2 PM", idleTime: 38, activeUsers: 380 },
  { time: "3 PM", idleTime: 32, activeUsers: 420 },
  { time: "4 PM", idleTime: 28, activeUsers: 460 },
  { time: "5 PM", idleTime: 22, activeUsers: 510 },
  { time: "6 PM", idleTime: 18, activeUsers: 480 },
  { time: "7 PM", idleTime: 24, activeUsers: 400 },
  { time: "8 PM", idleTime: 32, activeUsers: 350 },
  { time: "9 PM", idleTime: 38, activeUsers: 310 },
  { time: "10 PM", idleTime: 42, activeUsers: 280 },
  { time: "11 PM", idleTime: 48, activeUsers: 210 },
]

export function UserIdleChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>User Idle Time Analysis</CardTitle>
        <CardDescription>Average idle time and active users throughout the day</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            idleTime: {
              label: "Idle Time (minutes)",
              color: "hsl(var(--chart-1))",
            },
            activeUsers: {
              label: "Active Users",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={idleTimeData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" angle={-45} textAnchor="end" height={80} />
              <YAxis yAxisId="left" label={{ value: "Idle Time (min)", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "Active Users", angle: 90, position: "insideRight" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar yAxisId="left" dataKey="idleTime" fill="var(--color-idleTime)" name="Idle Time (minutes)" radius={[8, 8, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="activeUsers" stroke="var(--color-activeUsers)" name="Active Users" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}





// // web socket:
// -> client- server realtime 
// -> chat messages
// -> two way communication
// -> client initiates connection



// // server sent events:
// -> server initiates the connection
// -> 
