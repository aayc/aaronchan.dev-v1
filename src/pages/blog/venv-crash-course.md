---
path: "/blog/venv-crash-course"
date: "2020-05-04"
date_string: "May 4th, 2020"
title: "Python Virtual Environment Tools"
category: "guide"
--- 
Virtual environments allow you to isolate Python projects from each other. Installing package A in project A doesn't interfere with project B.

But there are so **many** tools out there! `pyenv`, `virtualenv`,
`virtualenvwrapper`, `venv`, `pipenv`, `piploc`, `conda`...

This is an opinionated guide to when do you use what.

### Do not use: `pipenv`
`pipenv` has not been updated since November 2018 and there are questions about
whether it is dead.  The other tools fulfill `pipenv`'s purpose.

### Probably do not use: `virtualenv` & `virtualenvwrapper`
Use these if you are specifically using an older version than Python 3.3.  In most cases it's in your best interest to upgrade your Python version - but if you know you need older than 3.3 then you probably know why.

Otherwise, in Python 3.3, `venv` became built-in and now takes the place of `virtualenv` and `virtualenvwrapper`

### Good for most cases: `venv`
```
python3 -m venv my_environment_name
source my_environment_name/bin/activate
```
the `venv` command is built into Python since 3.3 and it is the most straightforward to use.  It works out of the box.  When you run `source <your env>/bin/activate`, you're now in the virtual environment and whatever packages you install will be confined to `<your_env>`.

Use this if:
* You're using at least Python 3.3
* You don't care about multiple versions of Python across projects

### If you need multiple versions of Python: `pyenv`
Do some of your projects depend specifically on Python 3.6.5 compatible packages, but other projects do not?  Use `pyenv`. A fast way to get started is:
```
brew install pyenv
pyenv versions
pyenv install 3.6.5 # for example
pyenv local 3.6.5
python3 --version # Outputs Python 3.6.5
# Now you can use python3 -m venv <your_env> like above
```

### Handle non-Python packages: `conda`
Conda was created to handle non-Python dependencies which are not installed in
the same way that Python packages are.  Some typical users of conda include Data
Scientists and ML researchers.

`conda` has its own environments, and is really part of a different beast
altogether: the Anaconda Python distribution (a different way to install Python
on your system.  It takes up more storage but it's a lot more feature rich).  If
you're just working with Python and Python packages, using `conda` is probably
overkill for you.
