from bs4 import BeautifulSoup, Doctype
import re

JS_STRING_REGEX = re.compile(r"\".*\"")


def figma_text_replace(soup):
    for text_node in soup.find_all(text=True):
        # apparently doctypes are text too?
        if isinstance(text_node, Doctype):
            continue
        replaced = text_node.replace("Figma", "Ligma")
        text_node.replace_with(replaced)
    return soup


HTML_FUNCTIONS = [figma_text_replace]


def transform_html(html_text):
    soup = BeautifulSoup(html_text, features="html.parser")
    for f in HTML_FUNCTIONS:
        soup = f(soup)
    return str(soup)


def transform_js(js_text):
    return js_text.replace("Figma", "Ligma")