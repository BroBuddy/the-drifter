import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Preloader from './components/Preloader.tsx'
import App from './App.tsx'

const Game = React.lazy(() => import('./pages/GamePage.tsx'))
const BookletPage = React.lazy(() => import('./pages/BookletPage.tsx'))
const RuleDetailPage = React.lazy(
    () => import('./features/rule/pages/RuleDetailPage.tsx')
)
const EventDetailPage = React.lazy(
    () => import('./features/event/pages/EventDetailPage.tsx')
)
const TableA = React.lazy(() => import('./features/table/pages/TableA.tsx'))
const TableB = React.lazy(() => import('./features/table/pages/TableB.tsx'))
const TableC = React.lazy(() => import('./features/table/pages/TableC.tsx'))
const TableD = React.lazy(() => import('./features/table/pages/TableD.tsx'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Game />,
            },
            {
                path: '/booklet',
                element: <BookletPage />,
            },
            {
                path: '/rule/:tag',
                element: <RuleDetailPage />,
            },
            {
                path: '/event/:tag',
                element: <EventDetailPage />,
            },
            {
                path: '/table/a',
                element: <TableA />,
            },
            {
                path: '/table/b',
                element: <TableB />,
            },
            {
                path: '/table/c',
                element: <TableC />,
            },
            {
                path: '/table/d',
                element: <TableD />,
            },
        ],
    },
])

export default function AppRouter() {
    return (
        <Suspense fallback={<Preloader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
