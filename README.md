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
                <button class="btn-primary facebook-auth-button"><span class="social-abr">f</span>acebook</button>
                <button class="btn-danger google-auth-button"><span class="social-abr">G</span>oogle</button>
                <hr>
                <center><h4>-- OR --</h4></center>

                <form method="POST">
                    <label>Full name<input type="text" name="name" required></label>
                    <label>Email<input type="email" name="email" required></label>
                    <br>
                    <label>Password<input name="password" type="password" required></label>
                    <br>
                    <button class="btn-primary" type="submit">Sign in</button>
                </form>
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
