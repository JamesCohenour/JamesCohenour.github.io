var articles = new Array('Welcome', 'Sapiens', 'AriHun', 'Wild', 'Anger', 'Breath');

function show(id)
{
    for(i=0; i < articles.length; i++)
    {
        if(articles[i] === id)
        {
            document.getElementById(articles[i]).style.display = 'block';
        }
        else
        {
            document.getElementById(articles[i]).style.display = 'none';
        }
    }
}