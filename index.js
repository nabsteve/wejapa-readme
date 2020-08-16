const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your project title? ', function (answer) {
    let name = answer.toUpperCase();
    let stream = fs.createWriteStream("readme.md");
    stream.write(`${name}.md`);

    rl.question('How do we get started? ', function (started) {
        stream.write(`\n\n\n Getting Started \n ${started}`)

        rl.question('Describe the project: ', function (description) {
            stream.write(`\n\n Description \n ${description}`)

            rl.question('Project deployment: ', function (deployment) {
                stream.write(`\n\n Project Deployment \n ${deployment}`)

                rl.question('How to contribute: ', function (contribute) {
                    stream.write(`\n\n How to contribute \n ${contribute}`)

                    rl.question('Authors: ', function (authors) {
                        stream.write(`\n\n Authors \n ${authors}`)

                        rl.question('Acknowledgments: ', function (acknowledgments) {
                            stream.write(`\n\n Acknowledgements \n ${acknowledgments}`)
                        
                            rl.close()
                        })
                    })
                })

            })

        })
    })

})

rl.on("close", function() {
    console.log("\nReadme Initialized! !!!");
    process.exit(0);
});
