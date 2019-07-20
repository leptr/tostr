# tostr

Simple toast notifications for JavaScript

## Usage

- Include the JavaScript and the CSS file in your project
- Create a new toast message using the `createToast` function

createToast function takes 4 parameters:

- Message: the text you want displayed in the toast message
- Type: what type of message this is; types available are SUCCESS, ERROR, WARNING
- Position: where the message should be positioned at; available positions are TOP, BOTTOM, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT
- Lifespan: the lifespan of the message given in milliseconds;

### Example usage

`createToast("Example toast notification", SUCCESS, BOTTOM_LEFT, 3000);` - this creates a toast notification in the bottom left corner with the status of success that will be displayed for 3 seconds before disapearing
