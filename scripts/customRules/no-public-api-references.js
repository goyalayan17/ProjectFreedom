const moduleVisitor = require('eslint-module-utils/moduleVisitor').default;

module.exports ={
    'no-public-api-references': {
        meta:{
            type:'suggestion',
            docs:{
                description: 'no public api references',
                category: 'Possible Errors',
                recommended: true
            }, 
            schema:[]
        },
        create: function noInvalidHierarchies(context){
            const myPath = context.getFilename();
            if(myPath === '<text>') return {};

            function isPublicApis(depPath){
                var matches = depPath.match(/^src\/public_apis.*/);

                return matches && matches.length > 0;
            }

            function getRootDomain(depPath){
                var regex = /.*(src\/[a-zA-Z_]+)\/?.*/;

                if(depPath.match(/.*src\/app\/.*/)){
                    regex = /.*(src\/app\/[a-zA-Z]+)\/?\.*/;
                } else if(depPath.match(/.*src\/ui\/.*/)){
                    regex = /.*(src\/ui\/[a-zA-Z]+)\/?\.*/;
                }  else if(depPath.match(/.*src\/domain\/.*/)){
                    regex = /.*(src\/domain\/[a-zA-Z]+)\/?\.*/;
                }

                var matches = depPath.match(regex);

                if(matches){
                    return matches[1];
                }

                return null;
            }

            function checkSourceValue(sourceNode) {
                const depPath = sourceNode.value;
                const depRootPath = getRootDomain(depPath);

                if(depRootPath){
                    let isPublicApiPath = isPublisApis(depRootPath);

                    if(isPublicApiPath){
                        context.report(
                            {
                                node: sourceNode,
                                message: 'public_api references are forbidden in tests due to severe performance implications!'
                            }
                        );
                    }
                }
            }

            return moduleVisitor(checkSourceValue, context.options[0]);
        }
    }
};