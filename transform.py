from bs4 import BeautifulSoup, Doctype
import re


def insert_rewrite_script(soup):
    head_node = soup.find("head")
    rewrite_script_tag = soup.new_tag("script", src="/static-override/rewrite.js")
    head_node.append(rewrite_script_tag)
    return soup


def figma_replace(text):
    return text.replace("Figma", "Ligma")


def figma_text_replace(soup):
    for text_node in soup.find_all(text=True):
        # apparently doctypes are text too?
        if isinstance(text_node, Doctype):
            continue
        replaced = figma_replace(text_node)
        text_node.replace_with(replaced)
    return soup


def replace_meta_tags(soup):
    for meta_node in soup.find_all("meta"):
        if "content" in meta_node.attrs:
            meta_node["content"] = figma_replace(meta_node["content"])
    return soup


HTML_FUNCTIONS = [figma_text_replace, insert_rewrite_script, replace_meta_tags]


def transform_html(html_text):
    soup = BeautifulSoup(html_text, features="html.parser")
    for f in HTML_FUNCTIONS:
        soup = f(soup)
    return str(soup)


def transform_js(js_text):
    return figma_replace(js_text)
