const student = {
    name: 'kodom ali',
    money: 5000,
    studey: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.name, 'is practicing in exam');
    },
    improveExam: function(subject){
        this.exam(); 
    }
}

student.improveExam();