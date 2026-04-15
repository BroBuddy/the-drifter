import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Preloader from './components/Preloader.tsx'
import App from './App.tsx'

const Game = React.lazy(() => import('./pages/GamePage.tsx'))
const RulePage = React.lazy(() => import('./features/rule/pages/RulePage.tsx'))
const RuleDetailPage = React.lazy(
    () => import('./features/rule/pages/RuleDetailPage.tsx')
)

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Game />,
            },
            {
                path: '/rule/',
                element: <RulePage />,
            },
            {
                path: '/rule/:tag',
                element: <RuleDetailPage />,
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
