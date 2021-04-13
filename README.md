# Antd Admin 

## Notes

> Cannot read property 'location' of undefined at useLocation

1. can't use any of the hooks from within the same component that puts the Router into the tree
2. Need to move `BrowserRouter` out of the component
3. check if the user is loggedin in the `Admin` page, if not redirect to the login page

## Auth

try to use the [useAuth](https://reactrouter.com/web/example/auth-workflow) hook

## Plans

-[] add login page form
-[x] add login check logic in the admin page
-[] support sub routes