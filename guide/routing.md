# Routing

Simple URL based routing.

::: warning
Routing works in web, but it doesn't have full support yet.
:::

## Basic routing

To enable routing, you should define `routerRootConfiguration`. It needs some route definitions.

```dart
var routes = [
  RouteDefinition(
    '/not-found',
    (context, arguments) => const NotFoundScreen(),
  ),
  RouteDefinition(
    '/',
    (context, arguments) => const HomeScreen(),
  ),
];

void main() {
  App.create(
    appProviders: [
    routerRootConfiguration: RouterRootConfiguration(
      routeDefinitions: routes,
    ),
  ).run();
}
```

## Route parameters

Normally you need parametrize routes. For example, you may need to get post id from the route.

```dart
RouteDefinition(
  '/post/:post',
  (context, parameters) => const PostScreen(parameters['post']),
),
```

Route parameters are always start by colon `:`. Parameters are collected in the `parameters` map, where keys are
parameter names.

## Regular expression parameters

In case you need a fine tune match, you can define a regular expression for your parameters.

```dart
RouteDefinition(
  '/post/:post(\d+)',
  (context, parameters) => const PostScreen(parameters['post']),
),
```

Expressions are encased within parentheses `()` following the parameter name.

## Navigate to a new route

On a build context you can get the `RouterState` and then `push` a new route.

```dart
Router.of(context).push('/post/5');
```

## Navigate back

The easiest way to navigate back is to call the `pop` method.

```dart
Router.of(context).pop();
```

Also, the router listens to `Navigator` pop events so that actions like press the back button works successful.

## Remove a route

Previous routes can be removed.

```dart
Router.of(context).remove('/post/5');
```

## Restoration

The router is restored automatically. Just make sure `restorationScopeId` is set in your `MaterialApp`/`CupertinoApp`
/`WidgetsApp`.

## Next features

- Nested routers
- Middlewares
- Full web support