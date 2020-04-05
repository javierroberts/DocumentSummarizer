from flask import Flask, render_template


from summTools import getSumm
app = Flask(__name__)


@app.route("/")
def main():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(debug=True)
