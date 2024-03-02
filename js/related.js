var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if></b:loop></b:if>];
              var relatedPostConfig = {
                homePage: &quot;<data:blog.homepageUrl.canonical/>&quot;,
            
                // Replace <data:messages.youMayLikeThesePosts/> to change Related Posts title
                widgetTitle: &quot;<h2 class='title'>Artikel Lainnya</h2>&quot;,
            
                numPosts: 3,
                summaryLength: 180,
                titleLength:&quot;auto&quot;,
                thumbnailSize: 300,
                noImage: &quot;data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=&quot;,
                containerId: &quot;rPst&quot;,
                newTabLink: false,
                moreText: &quot;Read more&quot;,
            
                // Change the related post style, there are 4 styles available
                widgetStyle: 2,
            
                callBack:function(){}
              }