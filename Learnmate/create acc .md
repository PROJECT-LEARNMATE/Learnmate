<!DOCTYPE html>
<html lang="en">
<head>
    <title>Create Account</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #fff;
        }
        .container {
            background-color: #ffe6e6;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 400px;
        }
        h2 {
            color: #1a1a1a;
        }
        .input-group {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            padding: 10px;
            border: none;
            border-radius: 20px;
            background: #d78f8f;
            color: white;
            width: 38%;
            outline: none;
        }
        input::placeholder {
            color: white;
        }

        
        .checkbox-container {
            display: flex;
            align-items: center;
            justify-content: center;
			border-radius: 50%; 
            gap: 6px;
            margin-bottom: 5px;
            font-size: 14px;
        }

        button {
            background: #c05656;
            border: none;
            color: white;
            padding: 10px;
            width: 100%;
            border-radius: 20px;
            cursor: pointer;
            font-size: 16px;
        }
        .divider {
            display: flex;
            align-items: center;
            margin: 15px 0;
        }
        .divider::before, .divider::after {
            content: "";
            flex: 1;
            border-bottom: 1px solid black;
        }
        .divider span {
            padding: 0 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Create Account</h2>
        <div class="input-group">
            <input type="text" placeholder="Username">
            <input type="email" placeholder="Email">
        </div>
        <div class="input-group">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Confirm Password">
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="agree">
            <label for="agree">I Agree To The Terms & Conditions</label>
        </div>

        <button>Get Started</button>
        <div class="divider"><span>or</span></div>
        <button>Sign In</button>
    </div>
</body>
</html>
