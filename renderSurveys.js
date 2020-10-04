
function renderSurveys(surveys) {
    let surveyHtml = surveys.map(function(survey) {
        
        let html = renderSurveyTitle(survey.title);
        let fieldHtml = renderSurveyFields(survey.fields);
        let buttonHtml = renderSurveyButton(survey.submitButtonText);
        return html + fieldHtml + buttonHtml;
    });
       
    return `
        <div class="text-center mt-5">
            ${surveyHtml.join("")}
        </div>
    `
}

function renderSurveyTitle(title) {
    return `
        <div>${title}</div>    
    `
}

function renderSurveyButton(text) {
    return `
        <button type="submit">${text}</button>
    `
}

function renderSurveyFields(fields) {
    let fieldsHtml = fields.map(function(field) {   
        let fieldHtml = `
            <span>${field.label}</span>
        `
        let optionsHtml = "";
        if (field.options) {
            optionsHtml = renderFieldOptions(field.options);
        }

        if (field.type = "text") {
            `<textarea></textarea>`
        }
        
        return fieldHtml + optionsHtml;
    });

    return fieldsHtml.join("");
}

function renderFieldOptions(options) {
    let optionsHtml = options.map(function(option) {
        return `
            <input type="radio"></input>
            <label>${option}</label>
        `
    });

    return optionsHtml.join("");
}


function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                },
                {
                    label: "Date",
                    type: "date"
                }

            
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}