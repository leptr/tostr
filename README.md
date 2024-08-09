# Tostr

Simple toast notifications for JavaScript

![tostr_examples](https://github.com/user-attachments/assets/928a46be-54d6-4b0e-9f90-22f0baf0bb1c)

## Usage

- Include the JavaScript and the CSS file in your project
- Create a new toast message using the `createToast` function

## Syntax

`createToast(message, tyoe, position , ease_in, stay, ease_out, anim_type)`

- `message`: the text you want displayed in the toast message
- `type`: what type of message your toast is displaying; types available are: SUCCESS, ERROR, WARNING
- `position`: where the message should be positioned at; available positions are TOP, BOTTOM, TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT
- `ease_in`: time in seconds that the message should take to show up on the screen;
- `stay`: time in seconds that the message should stay on screen after the ease in animation in complete;
- `ease_out`: time in seconds that the message should take to get off screen after its stay is over;
- `anim_type`: the type of ease-in-out animation to use; available types are: SLIDE_IN, FADE_IN, SCALE_IN

### Example usage

`createToast("Oh no, I'm toast!", WARN, BOTTOM_RIGHT , 0.25, 2.5, 0.25, SLIDE_IN);` - this creates a warning toast notification in the bottom right corner that will take 0.25 seconds to slide in, stay on screen for 2.5 seconds, then take another 0.25 seconds to slide out

Or you can check out the example folder to see all of the possible options at once!
