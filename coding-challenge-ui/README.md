## Notes:

- had a conflicting peer dependency, I have updated the react-scripts and typescript dependency.
-  used the `@material-table` and `@material-core` as the UI libraries.
- using the `https://flagcdn.com/` site to obtain the country flags. (this can be cached to avoid extra service calls)
- sorting is handled by the `@material-table` default colum sorting feature.
- some parts of the code was refactord to isolate the view,model and logic into seperate files. 


------------
### Demo:

![](https://raw.githubusercontent.com/compilable/merchantSpring-code-challenge/main/ui_demo.jpg)


------------


## Reference:
- https://material-table.com/
- https://stackoverflow.com/questions/70368760/react-uncaught-referenceerror-process-is-not-defined
- https://github.com/facebook/create-react-app/issues/11773
