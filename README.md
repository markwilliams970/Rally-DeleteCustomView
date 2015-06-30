Rally-DeleteCustomView
=========================

This is a simple UI for deleting Custom Views for Rally TPS pages, useful when a Custom View has been corrupted and cannot be deleted from the Rally UI.

![App Screenshot](https://raw.githubusercontent.com/markwilliams970/Rally-PreferenceDeleter/master/images/screenshot1.png)

## Usage:

Grab the source code from:

https://raw.githubusercontent.com/markwilliams970/Rally-DeleteCustomView/master/deploy/App-uncompressed.html

And install the App according to these directions.

[Custom Page Directions from Rally Help](https://help.rallydev.com/use_apps#create)

Select the page on which the Custom View Resides:

* Plan->User Stories
* Quality->Defects
* Track->Tasks

Then key in the ObjectID of the CustomView. This is usually the last OID in this URL:

https://rally1.rallydev.com/#/2890731604d/defects?tpsSI=0&tpsV=gb%3A4576909546

In this example, the view ObjectID is: 4576909546

You may then delete the Custom View via the Delete button.

Video illustrating usage:



## License

This App is released under the MIT license.  See the file [LICENSE](./LICENSE) for the full text.

## Support
This app is strictly a code sample and is provided as-is. It's not a part of Rally's App Catalog. Rally Support cannot provide any assistance on the use, configuration, or troubleshooting of this app.

##Documentation for SDK

You can find the documentation on our help [site.](https://developer.rallydev.com)