"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2959:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={},r="Auto Generation",l={unversionedId:"Use-Cases/Auto-Generation",id:"Use-Cases/Auto-Generation",isDocsHomePage:!1,title:"Auto Generation",description:"flaml.autogen is a subpackage for automating generation tasks. It uses flaml.tune to find good hyperparameter configurations under budget constraints.",source:"@site/docs/Use-Cases/Auto-Generation.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/Auto-Generation",permalink:"/FLAML/docs/Use-Cases/Auto-Generation",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Use-Cases/Auto-Generation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/FLAML/docs/Installation"},next:{title:"Task Oriented AutoML",permalink:"/FLAML/docs/Use-Cases/Task-Oriented-AutoML"}},s=[{value:"Choices to Optimize",id:"choices-to-optimize",children:[],level:2},{value:"Tune Hyperparameters",id:"tune-hyperparameters",children:[{value:"Validation data",id:"validation-data",children:[],level:3},{value:"Evaluation function",id:"evaluation-function",children:[],level:3},{value:"Metric to optimize",id:"metric-to-optimize",children:[],level:3},{value:"Search space",id:"search-space",children:[],level:3},{value:"Budgets",id:"budgets",children:[],level:3},{value:"Perform tuning",id:"perform-tuning",children:[],level:3}],level:2},{value:"Perform inference with the tuned config",id:"perform-inference-with-the-tuned-config",children:[{value:"API unification",id:"api-unification",children:[],level:3},{value:"Caching",id:"caching",children:[],level:3},{value:"Error handling",id:"error-handling",children:[],level:3},{value:"Templating",id:"templating",children:[],level:3}],level:2},{value:"Other utilities",id:"other-utilities",children:[],level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auto-generation"},"Auto Generation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"flaml.autogen")," is a subpackage for automating generation tasks. It uses ",(0,i.kt)("a",{parentName:"p",href:"../reference/tune/tune"},(0,i.kt)("inlineCode",{parentName:"a"},"flaml.tune"))," to find good hyperparameter configurations under budget constraints.\nSuch optimization has several benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maximize the utility out of using expensive foundation models."),(0,i.kt)("li",{parentName:"ul"},"Reduce the inference cost by using cheaper models or configurations which achieve equal or better performance.")),(0,i.kt)("h2",{id:"choices-to-optimize"},"Choices to Optimize"),(0,i.kt)("p",null,"The cost of using foundation models for text generation is typically measured in terms of the number of tokens in the input and output combined. From the perspective of an application builder using foundation models, the use case is to maximize the utility of the generated text under an inference budget constraint (e.g., measured by the average dollar cost needed to solve a coding problem). This can be achieved by optimizing the hyperparameters of the inference,\nwhich can significantly affect both the utility and the cost of the generated text."),(0,i.kt)("p",null,"The tunable hyperparameters include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"model - this is a required input, specifying the model ID to use."),(0,i.kt)("li",{parentName:"ol"},"prompt/messages - the input prompt/messages to the model, which provides the context for the text generation task."),(0,i.kt)("li",{parentName:"ol"},"max_tokens - the maximum number of tokens (words or word pieces) to generate in the output."),(0,i.kt)("li",{parentName:"ol"},"temperature - a value between 0 and 1 that controls the randomness of the generated text. A higher temperature will result in more random and diverse text, while a lower temperature will result in more predictable text."),(0,i.kt)("li",{parentName:"ol"},"top_p - a value between 0 and 1 that controls the sampling probability mass for each token generation. A lower top_p value will make it more likely to generate text based on the most likely tokens, while a higher value will allow the model to explore a wider range of possible tokens."),(0,i.kt)("li",{parentName:"ol"},"n - the number of responses to generate for a given prompt. Generating multiple responses can provide more diverse and potentially more useful output, but it also increases the cost of the request."),(0,i.kt)("li",{parentName:"ol"},"stop - a list of strings that, when encountered in the generated text, will cause the generation to stop. This can be used to control the length or the validity of the output."),(0,i.kt)("li",{parentName:"ol"},"presence_penalty, frequency_penalty - values that control the relative importance of the presence and frequency of certain words or phrases in the generated text."),(0,i.kt)("li",{parentName:"ol"},'best_of - the number of responses to generate server-side when selecting the "best" (the one with the highest log probability per token) response for a given prompt.')),(0,i.kt)("p",null,"The cost and utility of text generation are intertwined with the joint effect of these hyperparameters.\nThere are also complex interactions among subsets of the hyperparameters. For example,\nthe temperature and top_p are not recommended to be altered from their default values together because they both control the randomness of the generated text, and changing both at the same time can result in conflicting effects; n and best_of are rarely tuned together because if the application can process multiple outputs, filtering on the server side causes unnecessary information loss; both n and max_tokens will affect the total number of tokens generated, which in turn will affect the cost of the request.\nThese interactions and trade-offs make it difficult to manually determine the optimal hyperparameter settings for a given text generation task."),(0,i.kt)("h2",{id:"tune-hyperparameters"},"Tune Hyperparameters"),(0,i.kt)("p",null,"The tuning can be performed with the following information:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validation data."),(0,i.kt)("li",{parentName:"ol"},"Evaluation function."),(0,i.kt)("li",{parentName:"ol"},"Metric to optimize."),(0,i.kt)("li",{parentName:"ol"},"Search space."),(0,i.kt)("li",{parentName:"ol"},"Budgets: inference and optimization respectively.")),(0,i.kt)("h3",{id:"validation-data"},"Validation data"),(0,i.kt)("p",null,'Collect a diverse set of instances. They can be stored in an iterable of dicts. For example, each instance dict can contain "problem" as a key and the description str of a math problem as the value; and "solution" as a key and the solution str as the value.'),(0,i.kt)("h3",{id:"evaluation-function"},"Evaluation function"),(0,i.kt)("p",null,"The evaluation function should take a list of responses, and other keyword arguments corresponding to the keys in each validation data instance as input, and output a dict of metrics. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def eval_math_responses(responses: List[str], solution: str, **args) -> Dict:\n    # select a response from the list of responses\n    # check whether the answer is correct\n    return {"success": True or False}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../reference/autogen/code_utils"},(0,i.kt)("inlineCode",{parentName:"a"},"flaml.autogen.code_utils"))," and ",(0,i.kt)("a",{parentName:"p",href:"../reference/autogen/math_utils"},(0,i.kt)("inlineCode",{parentName:"a"},"flaml.autogen.math_utils"))," offer some example evaluation functions for code generation and math problem solving."),(0,i.kt)("h3",{id:"metric-to-optimize"},"Metric to optimize"),(0,i.kt)("p",null,'The metric to optimize is usually an aggregated metric over all the tuning data instances. For example, users can specify "success" as the metric and "max" as the optimization mode. By default, the aggregation function is taking the average. Users can provide a customized aggregation function if needed.'),(0,i.kt)("h3",{id:"search-space"},"Search space"),(0,i.kt)("p",null,"Users can specify the (optional) search range for each hyperparameter."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"model. Either a constant str, or multiple choices specified by ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.choice"),"."),(0,i.kt)("li",{parentName:"ol"},'prompt/messages. Prompt is either a str or a list of strs, of the prompt templates. messages is a list of dicts or a list of lists, of the message templates.\nEach prompt/message template will be formatted with each data instance. For example, the prompt template can be:\n"{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in ',"\\",'boxed{{}}."\nAnd ',(0,i.kt)("inlineCode",{parentName:"li"},"{problem}"),' will be replaced by the "problem" field of each data instance.'),(0,i.kt)("li",{parentName:"ol"},"max_tokens, n, best_of. They can be constants, or specified by ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.randint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.qrandint"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.lograndint")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.qlograndint"),". By default, max_tokens is searched in [50, 1000); n is searched in [1, 100); and best_of is fixed to 1."),(0,i.kt)("li",{parentName:"ol"},"stop. It can be a str or a list of strs, or a list of lists of strs or None. Default is None."),(0,i.kt)("li",{parentName:"ol"},"temperature or top_p. One of them can be specified as a constant or by ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.uniform")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.loguniform")," etc.\nPlease don't provide both. By default, each configuration will choose either a temperature or a top_p in ","[0, 1]"," uniformly."),(0,i.kt)("li",{parentName:"ol"},"presence_penalty, frequency_penalty. They can be constants or specified by ",(0,i.kt)("inlineCode",{parentName:"li"},"flaml.tune.uniform")," etc. Not tuned by default.")),(0,i.kt)("h3",{id:"budgets"},"Budgets"),(0,i.kt)("p",null,"One can specify an inference budget and an optimization budget.\nThe inference budget refers to the average inference cost per data instance.\nThe optimization budget refers to the total budget allowed in the tuning process. Both are measured by dollars and follow the price per 1000 tokens."),(0,i.kt)("h3",{id:"perform-tuning"},"Perform tuning"),(0,i.kt)("p",null,"Now, you can use ",(0,i.kt)("a",{parentName:"p",href:"../reference/autogen/oai/completion#tune"},(0,i.kt)("inlineCode",{parentName:"a"},"flaml.oai.Completion.tune"))," for tuning. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import oai\n\nconfig, analysis = oai.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"num_samples")," is the number of configurations to sample. -1 means unlimited (until optimization budget is exhausted).\nThe returned ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," contains the optimized configuration and ",(0,i.kt)("inlineCode",{parentName:"p"},"analysis")," contains an ",(0,i.kt)("a",{parentName:"p",href:"../reference/tune/analysis#experimentanalysis-objects"},"ExperimentAnalysis")," object for all the tried configurations and results."),(0,i.kt)("h2",{id:"perform-inference-with-the-tuned-config"},"Perform inference with the tuned config"),(0,i.kt)("p",null,"One can use ",(0,i.kt)("a",{parentName:"p",href:"../reference/autogen/oai/completion#create"},(0,i.kt)("inlineCode",{parentName:"a"},"flaml.oai.Completion.create"))," to performance inference.\nThere are a number of benefits of using ",(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.Completion.create")," to perform inference."),(0,i.kt)("p",null,"A template is either a format str, or a function which produces a str from several input fields."),(0,i.kt)("h3",{id:"api-unification"},"API unification"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.Completion.create")," is compatible with both ",(0,i.kt)("inlineCode",{parentName:"p"},"openai.Completion.create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"openai.ChatCompletion.create"),', and both OpenAI API and Azure OpenAI API. So models such as "text-davinci-003", "gpt-3.5-turbo" and "gpt-4" can share a common API. When only tuning the chat-based models, ',(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.ChatCompletion")," can be used."),(0,i.kt)("h3",{id:"caching"},"Caching"),(0,i.kt)("p",null,'API call results are cached locally and reused when the same request is issued. This is useful when repeating or continuing experiments for reproducibility and cost saving. It still allows controlled randomness by setting the "seed", using ',(0,i.kt)("a",{parentName:"p",href:"../reference/autogen/oai/completion#set_cache"},(0,i.kt)("inlineCode",{parentName:"a"},"set_cache"))," or specifying in ",(0,i.kt)("inlineCode",{parentName:"p"},"create()"),"."),(0,i.kt)("h3",{id:"error-handling"},"Error handling"),(0,i.kt)("p",null,"It is easy to hit error when calling OpenAI APIs, due to connection, rate limit, or timeout. Some of the errors are transient. ",(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.Completion.create")," deals with the transient errors and retries automatically. Initial request timeout, retry timeout and retry time interval can be configured via ",(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.request_timeout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.retry_timeout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.retry_time"),"."),(0,i.kt)("h3",{id:"templating"},"Templating"),(0,i.kt)("p",null,"If the provided prompt or message is a template, it will be automatically materialized with a given context. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'response = oai.Completion.create(problme=problem, prompt="{problem} Solve the problem carefully.", **config)\n')),(0,i.kt)("h2",{id:"other-utilities"},"Other utilities"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"flaml.oai.Completion")," also offers some additional utilities, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"../reference/autogen/oai/completion#cost"},(0,i.kt)("inlineCode",{parentName:"a"},"cost"))," function to calculate the cost of an API call."),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"../reference/autogen/oai/completion#test"},(0,i.kt)("inlineCode",{parentName:"a"},"test"))," function to conveniently evaluate the configuration over test data."),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"../reference/autogen/oai/completion#extract_text"},(0,i.kt)("inlineCode",{parentName:"a"},"extract_text"))," function to extract the text from a completion or chat response."),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"../reference/autogen/oai/completion#extract_text"},(0,i.kt)("inlineCode",{parentName:"a"},"set_cache"))," function to set the seed and cache path. The caching is introduced in the section above, with the benefit of cost saving, reproducibility, and controlled randomness.")),(0,i.kt)("p",null,"Interested in trying it yourself? Please check the following notebook examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_openai.ipynb"},"Optimize for Code Gen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_chatgpt.ipynb"},"Optimize for Math"))))}c.isMDXComponent=!0}}]);