from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    user_name = request.args.get("name", "Developer")
    return render_template("index.html", user_name=user_name)
    
@app.route("/health")
def health():
    return {"status": "ok", "service": "frontend-flask-app"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
