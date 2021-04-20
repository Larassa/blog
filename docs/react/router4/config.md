# 路由配置

`link`、`Switch`等组件都需要被包裹在`BrowserRouter`或`HashRouter `里面，而且他们是不能被单独包裹的(虽然单独包裹不会报错)，会导致路由刷新了但是页面不刷新。

- 错误写法

```react
function RouterConfig() {
    return(
        <div>
        	<BrowserRouter>
                <Link to='/home'>home</Link>
            </BrowserRouter>
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={() => <div>home</div>}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
```

- 正确写法

```react
function RouterConfig() {
    return(
        <div>
        	<BrowserRouter>
                <Link to='/home'>home</Link>
                 <Switch>
                    <Route path="/home" component={() => <div>home</div>}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
```

虽然`react`路由的配置相当灵活，可以在各个组件中配置子路由，但在一个项目中，我们还是想将路由配置信息归置在一处，以便于后期维护。那么需要新建一个`router`的文件夹放置路由配置文件。