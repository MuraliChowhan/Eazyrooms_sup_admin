import React from "react"
import { Redirect } from "react-router-dom"
// User profile
import UserProfile from "../pages/Authentication/UserProfile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Bookings from "pages/Bookings/Bookings"
import Orders from "pages/Orders/Order"
import Requests from "pages/Requests/Requests"
import Plan from "pages/Plan/Plan"
import Subscriptions from "pages/Subscriptions/Subscriptions"
import Settings from "pages/Settings/Settings"
import Tasks from "pages/Chat/tasks"
import Teams from "pages/Teams/Teams"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: UserProfile },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/bookings", component: Bookings },
  { path: "/orders", component: Orders },
  { path: "/requests", component: Requests },
  { path: "/plan", component: Plan },
  { path: "/activesubscriptions", component: Subscriptions },
  { path: "/inactivesubscriptions", component: Subscriptions },
  { path: "/settings", component: Settings },
  { path: "/team", component: Teams },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes }
