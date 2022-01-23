# App

It's the starting point of Alba.

## Create and run the app

Create and run the app is easy, it only requires a widget where your app starts.

```dart
void main() {
  App.create(
    widget: const MyApp(),
  ).run();
}
```

Later you will see how you can configure service providers, routing, and error listeners.
It is explained in each section.