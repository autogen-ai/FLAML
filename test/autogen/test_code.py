import sys
import os
import pytest
from flaml.autogen.code_utils import extract_code, execute_code

here = os.path.abspath(os.path.dirname(__file__))


def test_extract_code():
    print(extract_code("```bash\npython temp.py\n```"))
    # test extract_code from markdown
    codeblocks = extract_code(
        """
Example:
```
print("hello extract code")
```
"""
    )
    print(codeblocks)

    codeblocks = extract_code(
        """
Example:
```python
def scrape(url):
    import requests
    from bs4 import BeautifulSoup
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    title = soup.find("title").text
    text = soup.find("div", {"id": "bodyContent"}).text
    return title, text
```
Test:
```python
url = "https://en.wikipedia.org/wiki/Web_scraping"
title, text = scrape(url)
print(f"Title: {title}")
print(f"Text: {text}")
"""
    )
    print(codeblocks)


@pytest.mark.skipif(
    sys.platform in ["darwin", "win32"],
    reason="do not run on MacOS or windows",
)
def test_execute_code():
    try:
        import docker
    except ImportError as exc:
        print(exc)
        return
    exitcode, msg = execute_code("print('hello world')", filename="tmp/codetest.py")
    assert exitcode == 0 and msg == b"hello world\n", msg
    # read a file
    print(execute_code("with open('tmp/codetest.py', 'r') as f: a=f.read()"))
    # create a file
    print(execute_code("with open('tmp/codetest.py', 'w') as f: f.write('b=1')", work_dir=f"{here}/my_tmp"))
    # execute code in a file
    print(execute_code(filename="tmp/codetest.py"))
    print(execute_code("python tmp/codetest.py", lang="sh"))
    # execute code for assertion error
    exit_code, msg = execute_code("assert 1==2")
    assert exit_code, msg
    # execute code which takes a long time
    exit_code, error = execute_code("import time; time.sleep(2)", timeout=1)
    assert exit_code and error == "Timeout"
    exit_code, error = execute_code("import time; time.sleep(2)", timeout=1, use_docker=False)
    assert exit_code and error == "Timeout"


if __name__ == "__main__":
    test_execute_code()
