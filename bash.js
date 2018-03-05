// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

    if(cmd === 'date') {
        process.stdout.write(Date());
    } else if(cmd === 'pwd') { 
        process.stdout.write(process.cwd());
    } else {
        process.stdout.write("You did not type in date or pwd.");
    }
    process.stdout.write('\nprompt > ');
});
