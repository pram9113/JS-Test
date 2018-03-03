function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issueList = document.getElementById('issueList');

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.Length; i++ ); {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;
    }
}