# Antd Admin 

## Notes

> Cannot read property 'location' of undefined at useLocation

1. can't use any of the hooks from within the same component that puts the Router into the tree
2. Need to move `BrowserRouter` out of the component

## Auth

try to use the [useAuth](https://reactrouter.com/web/example/auth-workflow) hook