# Simple-JavaScript-CSS-Modal
Simple modal implementation. If you need some thing simple and light. You just want to show some dialog/popup on screen

## Basic usage example
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example - Simple Modal</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="simple-modal.css" rel="stylesheet" type="text/css">
  </head>

<body>
    <!-- modal -->
    <div class="simple-modal" id="signin-modal">
        <div class="simple-modal-container">
            <div class="simple-modal-close" title="Close">x</div>
            <div class="simple-modal-title">
                <h3>Sign in with</h3>
            </div>
            <div class="simple-modal-content">
              <p>Hello World</p>
            </div>
        </div>
    </div>
    <!-- /modal -->
  
    <!-- modal trigger -->
    <button class="simple-modal-trigger" simple-modal-target="signin-modal">Show modal</button>
    <!-- /modal trigger -->
  
    <script src="simple-modal.js" lang=></script>

  </body>
</html>
```

## Javascript api

```javascript
var modal = SimpleModal(document.getElementById('signin-modal'));
```

#### Show modal
```javascript
modal.show();
```

#### Hide modal
```javascript
modal.hide();
```
```
