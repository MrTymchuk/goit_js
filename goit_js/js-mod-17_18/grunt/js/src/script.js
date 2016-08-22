// AJAX QUERIES
$(function() {
    $('.search-form').on('submit', function() {
        var enteredQuery = $('#entered-query').val();
        $.ajax({
            url: "http://api.riffsy.com/v1/search?tag=" + enteredQuery + "&limit=10",
            success: function(data, textStatus) {
                console.log('Success: ', data);
                var ul = document.createElement('ul');
                 if (data.results.length === 0) {
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
