import 'package:flutter/material.dart';

void main() {
 runApp(MyApp());
}

class MyApp extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Registration Form',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Registration Form'),
    );
 }
}

class MyHomePage extends StatefulWidget {
 MyHomePage({Key? key, required this.title}) : super(key: key);

 final String title;

 @override
 _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
 TextEditingController _surnameController = TextEditingController();
 // Other text controllers can be added here for other fields.

 @override
 Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                controller: _surnameController,
                decoration: InputDecoration(
                 labelText: 'Surname',
                 border: OutlineInputBorder(),
                ),
              ),
            ),
            // Add other fields here.

            ElevatedButton(
              onPressed: () {
                // Add code to perform validation and send data to server.
              },
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
 }
}