MazeActivated = false;
DBActivated = false;
DotaActivated = false;
HashingActivated = false;
SortingActivated = false;
SudokuActivated = false;
CheckersActivated = false;
CameraActivated = false;
RubyActivated = false;
WebActivated = false;



function displayMazeInfo()
{
    if(MazeActivated)
    {
        ele = document.getElementById("MazeInfo");
        ele.innerHTML = "<h2>Maze Solver<h2>";
        MazeActivated = !MazeActivated;
    }
    else
    {
        ele = document.getElementById("MazeInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        MazeActivated = !MazeActivated;
    }
}
function displayDBInfo()
{
    if(DBActivated)
    {
        ele = document.getElementById("DBInfo");
        ele.innerHTML = "<h2>Sample Database<h2>";
        DBActivated = !DBActivated;
    }
    else
    {
        ele = document.getElementById("DBInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        DBActivated = !DBActivated;
    }
}
function displayDotaInfo()
{
    if(DotaActivated)
    {
        ele = document.getElementById("DotaInfo");
        ele.innerHTML = "<h2>Dota 2 Information Bot<h2>";
        DotaActivated = !DotaActivated;
    }
    else
    {
        ele = document.getElementById("DotaInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        DotaActivated = !DotaActivated;
    }
}
function displayHashingInfo()
{
    if(HashingActivated)
    {
        ele = document.getElementById("HashingInfo");
        ele.innerHTML = "<h2>Hashing Research Paper<h2>";
        HashingActivated = !HashingActivated;
    }
    else
    {
        ele = document.getElementById("HashingInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        HashingActivated = !HashingActivated;
    }
}

function displaySortingInfo()
{
    if(SortingActivated)
    {
        ele = document.getElementById("SortingInfo");
        ele.innerHTML = "<h2>Sorting Analysis<h2>";
        SortingActivated = !SortingActivated;
    }
    else
    {
        ele = document.getElementById("SortingInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        SortingActivated = !SortingActivated;
    }
}

function displaySudokuInfo()
{
    if(SudokuActivated)
    {
        ele = document.getElementById("SudokuInfo");
        ele.innerHTML = "<h2>Sudoku Game<h2>";
        SudokuActivated = !SudokuActivated;
    }
    else
    {
        ele = document.getElementById("SudokuInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        SudokuActivated = !SudokuActivated;
    } 
}

function displayCheckersInfo()
{
    if(CheckersActivated)
    {
        ele = document.getElementById("CheckersInfo");
        ele.innerHTML = "<h2>Mobile Checkers<h2>";
        CheckersActivated = !CheckersActivated;
    }
    else
    {
        ele = document.getElementById("CheckersInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        CheckersActivated = !CheckersActivated;
    }
}

function displayCameraInfo()
{
    if(CameraActivated)
    {
        ele = document.getElementById("CameraInfo");
        ele.innerHTML = "<h2>Motion Detecting Camera<h2>";
        CameraActivated = !CameraActivated;
    }
    else
    {
        ele = document.getElementById("CameraInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        CameraActivated = !CameraActivated;
    }
}

function displayRubyInfo()
{
    if(RubyActivated)
    {
        ele = document.getElementById("RubyInfo");
        ele.innerHTML = "<h2>History of Ruby<h2>";
        RubyActivated = !RubyActivated;
    }
    else
    {
        ele = document.getElementById("RubyInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        RubyActivated = !RubyActivated;
    }
}

function displayWebInfo()
{
    if(WebActivated)
    {
        ele = document.getElementById("WebInfo");
        ele.innerHTML = "<h2>Create Your Own Webpage!<h2>";
        WebActivated = !WebActivated;
    }
    else
    {
        ele = document.getElementById("WebInfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        WebActivated = !WebActivated;
    }
}