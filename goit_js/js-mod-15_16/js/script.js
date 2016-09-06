// AJAX QUERIES
$(function() {
    $('.search-form').on('submit', function() {
        var enteredQuery = $('#entered-query').val();
        $.ajax({
            url: "//api.riffsy.com/v1/search?tag=" + enteredQuery + "&limit=10",
            success: function(data, textStatus) {
                console.log('Success: ', data);
                var ul = document.createElement('ul');
                 if (data.results.length == 0) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    li.innerHTML =  '<p>There are no results matching.</p>';
                    ul.appendChild(li);
                 }
                $.each(data.results, function(i, val) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    li.innerHTML = 'Result №'+ (i+1) + ': ' +'<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+ '</br>' +'<img class="image-output" src="'+val.url+'">'+"</a>";
                    ul.appendChild(li);                   
                });
                $('#out-results').html(ul);
            },
            error: function(data, textStatus) {
                console.log('Error: ', data);
            }
        });    
        return false;  
    });   
});

// PROTOTIPE OOP
function Human() {
    this.name = 'Mr.Tymchuk';
    this.age = '21';
    this.sex = 'male';
    this.height = '171 cm';
    this.weight = '79 kg';
}

function Worker() {
    this.placeOfJob = 'CEIT.dev';
    this.salary = '1000$';
    this.doWork = function() {
        alert('I like my Work!');
    }
}

function Student() {
    this.placeOfStudy = 'Chernivci National Juriy Fedkovyc University';
    this.scholarship = '100$';
    this.watchSoapOpera = function() {
        alert('Life its Good!');
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Worker1 = new Worker();
console.log('Worker1 place of job: ', Worker1.placeOfJob);
console.log('Worker1 salary: ', Worker1.salary);
console.log('Worker1 age: ', Worker1.age);
console.log('Worker1 height: ', Worker1.height);
console.log('Worker1 weight: ', Worker1.weight);
console.log('---------------------------------------------------');

var Student1 = new Student();
console.log('Student1 name: ', Student1.name);
console.log('Student1 weight: ', Student1.weight);
console.log('Student1 place of study: ', Student1.placeOfStudy);
console.log('---------------------------------------------------');

var Student2 = new Student();
console.log('Student2 sex: ', Student2.sex);
console.log('Student2 height: ', Student2.height);
console.log('Student2 age: ', Student2.age);
console.log('Student2 scholarship: ', Student2.scholarship);
