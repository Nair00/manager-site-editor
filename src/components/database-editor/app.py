from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import contextlib
from sqlalchemy import MetaData
#from date_intrare import InputData

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
# initialized data base

lenght = 0
class Todo(db.Model):
    # presupunem ca aplicatia poate face tabele bazate pe maxim 5 campuri
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    content_2 = db.Column(db.String(200))
    content_3 = db.Column(db.String(200))
    content_4 = db.Column(db.String(200))
    content_5 = db.Column(db.String(200))
    #completed = db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        task_string = request.form['content']
        #print(task_string)
        task_content = task_string.replace("\n"," ").split(" ")
        print(len(task_content))

        '''
        new_task = Todo(content=task_content[0], content_2=task_content[1], content_3=task_content[2], content_4=task_content[3])
    
        try:
            db.session.add(new_task)
            global lenght
            lenght += 1
            db.session.commit()
            return redirect('/')
        except:
            return 'there was an issue adding your task'
        

        '''
        for i in range(0, len(task_content), 4):
            new_task = Todo(content=task_content[i], content_2=task_content[i+1], content_3=task_content[i+2], content_4=task_content[i+3])
            try: 
                db.session.add(new_task)
                global lenght
                lenght += 1
                db.session.commit()
            except:
                return 'mai incearca'
           
               
        
        #for i in range(0, len(task_content), 1):
        #print(task_content[i])
        return redirect('/')
        #print(task_content)
        
    else:
        tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html', tasks=tasks)
    

@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was a problem deleting that task'


def deleteall():

    global lenght
    i = lenght - 1
    task_content = data_entry[i][0]
    task_content2 = data_entry[i][1]
    task_content3 = data_entry[i][2]
    task_content4 = data_entry[i][3]
    me = Todo(content=task_content, content_2=task_content2, content_3=task_content3, content_4=task_content4)  
    db.session.delete(me)
    db.session.commit()


@app.route('/ADD', methods=["POST"])
def complete_tabel():
    f = open("text.txt", "r")
    nr_line = 0
    line = f.readline()
    parameters = line.count(' ') + 1
    data_entry = [[0 for x in range(10)] for y in range(20)]
    while len(line) != 0:
        index = 0
        # print(line)
        for camp in line.split(" "):
            data_entry[nr_line][index] = camp
            index += 1
        line = f.readline()
        print(data_entry[nr_line])
        nr_line += 1

    f.close()

    for i in range(nr_line):
        task_content = data_entry[i][0]
        task_content2 = data_entry[i][1]
        task_content3 = data_entry[i][2]
        task_content4 = data_entry[i][3]
        global lenght
        lenght += 1
        new_task = Todo(content=task_content, content_2=task_content2, content_3=task_content3, content_4=task_content4)
        try:
            db.session.add(new_task)
            db.session.commit()
        except:
            return 'there was an issue adding your task'
    return redirect('/')


@app.route("/upload-image", methods=["GET", "POST"])
def upload_image():

    if request.method == "POST":
        if request.files:
            image = request.files["file.txt"]
            image.save(image.filename)
            print("Image saved")
            return redirect('/')
    return render_template('/')


if __name__ == "__main__":
    #complete_tabel()
    app.run(debug=True)
    #deleteall()
