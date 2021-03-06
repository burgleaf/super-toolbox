// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TreeNode } from './providers/BaseProvider';
import TimeToolProvider from './providers/TimeToolProvider';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "super-toolbox" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('super-toolbox.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from super-toolbox!');
	});

	const timeToolProvider = new TimeToolProvider();

	vscode.window.createTreeView('time-tools',{
		treeDataProvider: timeToolProvider,
		showCollapseAll: true
	});

	let homeDisposable1 = vscode.commands.registerCommand('super-toolbox.refreshAll', () => timeToolProvider.refreshAll());
	




	context.subscriptions.push(disposable,homeDisposable1);
}

// this method is called when your extension is deactivated
export function deactivate() {}
