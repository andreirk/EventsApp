import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";
import Search from "../pages/Search";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    SEARCH = '/search',
    CHAT = '/chat',
    SWIPE = '/swipe',
    MATCHES = '/matches',
    CONCURS = '/concurs',
   

}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event} ,
    {path: RouteNames.SEARCH, exact: true, component: Search} ,
]
