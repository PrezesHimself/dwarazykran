angular.module("webApp").run(["$templateCache", function($templateCache) {$templateCache.put("home.tpl.html","<mainnav></mainnav>");
$templateCache.put("map.tpl.html","<div class=\"map\">\r\n\r\n</div>\r\n<sidebar ng-if=\"vm.currentShopName\" current-shop=\"vm.currentShop\"></sidebar>");
$templateCache.put("shops.tpl.html","<br>\r\n<div class=\"container-fluid\" ng-if=\"!vm.loading\">\r\n    <div class=\"row example-animate-container\">\r\n        <div ng-repeat=\"shop in vm.shops | levenstain:\'name\':vm.searchInput\" class=\"col-sm-6 col-md-3   shopslist__item animate-repeat\">\r\n                    <div class=\"thumbnail\">\r\n                        <img ng-src=\"{{shop.logo_url}}\" alt=\"\">\r\n                        <div class=\"caption\">\r\n                            <h3>{{shop.name}}</h3>\r\n                            <p>{{shop.description}}</p>\r\n                            <p>\r\n                                <a ui-sref=\'app.map({shopName: shop.name})\' class=\"btn btn-primary\" role=\"button\">poka trase</a>\r\n                                <a ui-sref=\'app.map({shopName: shop.name})\' class=\"btn btn-default\" role=\"button\">idź pan</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div ng-if=\"vm.loading\">\r\n    <p style=\"text-align: center\">\r\n    <div class=\"spinner\">\r\n        <div class=\"rect1\"></div>\r\n        <div class=\"rect2\"></div>\r\n        <div class=\"rect3\"></div>\r\n        <div class=\"rect4\"></div>\r\n        <div class=\"rect5\"></div>\r\n    </div>\r\n    </p>\r\n</div>");
$templateCache.put("header.tpl.html","<a ui-sref=\"app.home\">\r\n    <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2MyA0NjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2MyA0NjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjMyLjAyNiwxNzZjLTMwLjYwMywwLTU1LjUsMjQuODk3LTU1LjUsNTUuNXMyNC44OTcsNTUuNSw1NS41LDU1LjVzNTUuNS0yNC44OTcsNTUuNS01NS41UzI2Mi42MjgsMTc2LDIzMi4wMjYsMTc2eiAgICBNMjMyLjAyNiwyNzJjLTIyLjMzMiwwLTQwLjUtMTguMTY4LTQwLjUtNDAuNXMxOC4xNjgtNDAuNSw0MC41LTQwLjVzNDAuNSwxOC4xNjgsNDAuNSw0MC41UzI1NC4zNTgsMjcyLDIzMi4wMjYsMjcyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTIzMi4wMjYsMjA4Yy00LjE0MywwLTcuNSwzLjM1Ny03LjUsNy41czMuMzU3LDcuNSw3LjUsNy41YzQuNjg3LDAsOC41LDMuODEzLDguNSw4LjVjMCw0LjE0MywzLjM1Nyw3LjUsNy41LDcuNSAgIHM3LjUtMy4zNTcsNy41LTcuNUMyNTUuNTI2LDIxOC41NDIsMjQ0Ljk4NCwyMDgsMjMyLjAyNiwyMDh6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMzg4LjA2MSwyMzEuNWM2LjU3NS02Ljg2MywxMi42MzMtMTMuNzU1LDE4LjExNC0yMC42MzNjMzAuMzg0LTM4LjEyNiwzOS43MzYtNzEuOTA2LDI2LjMzNS05NS4xMTcgICBjLTEzLjQtMjMuMjEtNDcuMzI5LTMyLjAwMy05NS41NDEtMjQuNzUyYy04LjcxMywxLjMxLTE3LjcyOSwzLjExNS0yNi45NzcsNS4zODRjLTUuNDgxLTE4Ljg5Ny0xMi4xMzYtMzUuODAyLTE5LjgxOS00OS45NjkgICBjMy4zNDItNC4wNiw1LjM1Mi05LjI1Niw1LjM1Mi0xNC45MTNjMC0xMi45NTgtMTAuNTQyLTIzLjUtMjMuNS0yMy41Yy0zLjg1MSwwLTcuNDg1LDAuOTM3LTEwLjY5NiwyLjU4NiAgIEMyNTEuOTU0LDMuNTYzLDI0Mi4xMTYsMCwyMzIuMDI2LDBjLTI2LjgwMiwwLTUxLjM4LDI0Ljk4OS02OS4yMDYsNzAuMzY1Yy0zLjIxNiw4LjE4NS02LjE1NiwxNi44NzktOC44MTIsMjYuMDA0ICAgYy05LjIzLTIuMjYyLTE4LjIyOS00LjA2My0yNi45MjYtNS4zNzFDNzguODczLDgzLjc1LDQ0Ljk0Miw5Mi41MzksMzEuNTQsMTE1Ljc1Yy0xMy40LDIzLjIxMS00LjA0OCw1Ni45OTEsMjYuMzM2LDk1LjExNyAgIGM1LjQ5Miw2Ljg5MSwxMS41NjQsMTMuNzk3LDE4LjE1MywyMC42NzNjLTguMTE2LDguNDU1LTE1LjQxNSwxNi45MjUtMjEuNzczLDI1LjMwNUM1Mi4yNywyNTYuMjk4LDUwLjE4MywyNTYsNDguMDI2LDI1NiAgIGMtMTIuOTU4LDAtMjMuNSwxMC41NDItMjMuNSwyMy41YzAsNi40NDgsMi42MTIsMTIuMjk3LDYuODMyLDE2LjU0N2MtNy43MjIsMTkuOTUtNy42NzcsMzcuNTg3LDAuMTgzLDUxLjIwMyAgIGMxMC4zMzgsMTcuOTA1LDMyLjg4NiwyNy4yMjksNjQuNzg4LDI3LjIyOGM5LjQ1MywwLDE5LjczNC0wLjgxOSwzMC43NTQtMi40NzdjOC42OTYtMS4zMDgsMTcuNjk1LTMuMTA4LDI2LjkyNi01LjM3MSAgIGMyLjY1Niw5LjEyNSw1LjU5NiwxNy44MTgsOC44MTIsMjYuMDA0QzE4MC42NDYsNDM4LjAxLDIwNS4yMjQsNDYzLDIzMi4wMjYsNDYzczUxLjM4LTI0Ljk5LDY5LjIwNi03MC4zNjYgICBjMy4yMjEtOC4xOTksNi4xNjYtMTYuOTA4LDguODI1LTI2LjA1YzEyLjIyOSwzLjAwOSwyNC4wMDcsNS4xOTgsMzUuMTQyLDYuNDljMi41MSwxMC4yNzYsMTEuNzg5LDE3LjkyNywyMi44MjcsMTcuOTI3ICAgYzExLjIzNywwLDIwLjY1Mi03LjkzLDIyLjk1Ni0xOC40ODdjMTkuNzIzLTMuNiwzNC4wMzYtMTIuMjg3LDQxLjUyOC0yNS4yNjNjMTMuNDAxLTIzLjIxMSw0LjA0OS01Ni45OTEtMjYuMzM1LTk1LjExNyAgIEM0MDAuNjk0LDI0NS4yNTUsMzk0LjYzNiwyMzguMzYyLDM4OC4wNjEsMjMxLjV6IE0zMzkuMTk5LDEwNS44MzJjNDEuMDg1LTYuMTgyLDcwLjM2MSwwLjE2OSw4MC4zMiwxNy40MTggICBjOS45NTgsMTcuMjQ4LDAuODE4LDQ1Ljc3Ni0yNS4wNzUsNzguMjY5Yy01LjE0Miw2LjQ1Mi0xMC44MjMsMTIuOTI0LTE2Ljk4NywxOS4zNzRjLTE1LjM4NC0xNC43ODQtMzMuMDY5LTI5LjMxMS01Mi40OC00My4xMTQgICBjLTIuMjc2LTIzLjcxMS02LjAzOC00Ni4yODYtMTEuMTE0LTY2LjkwOEMzMjIuNTU0LDEwOC43NTEsMzMxLjAyMSwxMDcuMDYyLDMzOS4xOTksMTA1LjgzMnogTTI3Mi4yNzYsMzAxLjIxNSAgIGMtMTMuMzczLDcuNzIxLTI2LjgzNiwxNC43NzUtNDAuMjE4LDIxLjExM2MtMTMuNDMzLTYuMzQ2LTI2LjkyOS0xMy40MDQtNDAuMjgyLTIxLjExM2MtMTMuMzgzLTcuNzI3LTI2LjIzNC0xNS44NjYtMzguNDIzLTI0LjI5NCAgIGMtMS4yMDQtMTQuNzY5LTEuODI3LTI5Ljk2OC0xLjgyNy00NS40MjFjMC0xNS40MzksMC42MjItMzAuNjI0LDEuODI0LTQ1LjM4YzEyLjIyMS04LjQ3MSwyNS4wODUtMTYuNjMzLDM4LjQyNi0yNC4zMzYgICBjMTMuMzgzLTcuNzI3LDI2Ljg1Ny0xNC43ODYsNDAuMjUtMjEuMTI4YzEzLjM5Myw2LjM0MSwyNi44NjcsMTMuNDAxLDQwLjI1LDIxLjEyOGMxMy4zNzUsNy43MjIsMjYuMjE4LDE1Ljg1NSwzOC4zOTksMjQuMjc3ICAgYzEuMjE1LDE0Ljc4LDEuODUxLDI5Ljk5MywxLjg1MSw0NS40MzljMCwxNS40NTMtMC42MjMsMzAuNjUyLTEuODI3LDQ1LjQyMUMyOTguNTEsMjg1LjM0OSwyODUuNjU5LDI5My40ODgsMjcyLjI3NiwzMDEuMjE1eiAgICBNMzA4Ljc1MiwyOTYuMzNjLTIuMTksMTguMjYzLTUuMzEsMzUuNjg4LTkuMjk5LDUxLjkwMWMtMTYuMDAxLTQuNjUyLTMyLjY3My0xMC42NjctNDkuNTk3LTE3Ljg5NCAgIGM5Ljk4Ni01LjAwOSwxOS45ODEtMTAuMzk0LDI5LjkxOS0xNi4xMzFDMjg5LjczLDMwOC40NTgsMjk5LjQwNiwzMDIuNDg0LDMwOC43NTIsMjk2LjMzeiBNMjE0LjI3NSwzMzAuMzQ4ICAgYy0xNi45MzYsNy4yNDctMzMuNjExLDEzLjI2Ni00OS42NjgsMTcuOTIzYy0zLjk5My0xNi4yMjQtNy4xMTctMzMuNjYzLTkuMzA4LTUxLjk0MmM5LjM0Niw2LjE1NCwxOS4wMjIsMTIuMTI5LDI4Ljk3NywxNy44NzYgICBDMTk0LjIxNSwzMTkuOTQzLDIwNC4yNDIsMzI1LjMyOCwyMTQuMjc1LDMzMC4zNDh6IE0xMzcuNTE4LDI2NS41MzFjLTE0LjcxNi0xMS4wMjQtMjguMjQxLTIyLjQzNC00MC4yODQtMzMuOTkgICBjMTIuMDI5LTExLjUzLDI1LjU3NC0yMi45NjEsNDAuMjgtMzMuOTk5Yy0wLjY1NCwxMS4xNDctMC45ODgsMjIuNDg5LTAuOTg4LDMzLjk1OCAgIEMxMzYuNTI2LDI0Mi45OTQsMTM2Ljg2MSwyNTQuMzYxLDEzNy41MTgsMjY1LjUzMXogTTE1NS4yOTQsMTY2LjcwOGMyLjE5Mi0xOC4yOTIsNS4zMTctMzUuNzQ0LDkuMzEzLTUxLjk3OSAgIGMxNi4wNDcsNC42NTQsMzIuNzEyLDEwLjY2OCw0OS42MzcsMTcuOTA5Yy0xMC4wMDIsNS4wMTYtMjAuMDE1LDEwLjQwOS0yOS45NjksMTYuMTU2ICAgQzE3NC4zNDIsMTU0LjUyOSwxNjQuNjY0LDE2MC41MjIsMTU1LjI5NCwxNjYuNzA4eiBNMjQ5LjgwNywxMzIuNjM4YzE2LjkxNi03LjIzNywzMy41NzItMTMuMjQ5LDQ5LjYxMS0xNy45MDEgICBjMy45NjEsMTYuMTUxLDcuMDksMzMuNTk0LDkuMjk0LDUxLjkwN2MtOS4zMzMtNi4xNDUtMTguOTk2LTEyLjExLTI4LjkzNi0xNy44NDlDMjY5LjgyMSwxNDMuMDQ3LDI1OS44MDksMTM3LjY1NCwyNDkuODA3LDEzMi42MzggICB6IE0zMjYuNTA5LDE5Ny40NWMxNC43NDMsMTEuMDQyLDI4LjI5MSwyMi40NzMsNDAuMzUyLDM0LjA1Yy0xMi4wNTQsMTEuNTctMjUuNTk0LDIyLjk5NS00MC4zMjgsMzQuMDMyICAgYzAuNjU3LTExLjE3LDAuOTkzLTIyLjUzNywwLjk5My0zNC4wMzFDMzI3LjUyNiwyMjAuMDExLDMyNy4xNzgsMjA4LjYzNSwzMjYuNTA5LDE5Ny40NXogTTI4MC41MjYsMzEuNWMwLDQuNjg3LTMuODEzLDguNS04LjUsOC41ICAgcy04LjUtMy44MTMtOC41LTguNXMzLjgxMy04LjUsOC41LTguNVMyODAuNTI2LDI2LjgxMywyODAuNTI2LDMxLjV6IE0xNzYuNzgsNzUuODUxQzE5MS45NzMsMzcuMTc5LDIxMi4xMDksMTUsMjMyLjAyNiwxNSAgIGM2LjIzOSwwLDEyLjUyOSwyLjE3MywxOC43NTUsNi40NjdjLTEuNDQ0LDMuMDQ1LTIuMjU1LDYuNDQ1LTIuMjU1LDEwLjAzM2MwLDEyLjk1OCwxMC41NDIsMjMuNSwyMy41LDIzLjUgICBjMS44NTUsMCwzLjY1OC0wLjIyMyw1LjM5MS0wLjYzMWM2Ljk4OSwxMy4wNCwxMy4wNzgsMjguNTQsMTguMTMyLDQ1Ljg4MmMtMjAuNDc4LDUuOTI2LTQxLjg4MiwxMy45NzEtNjMuNTIyLDIzLjg2OCAgIGMtMjEuNjQ0LTkuODk5LTQzLjA1LTE3Ljk0NC02My41My0yMy44N0MxNzAuOTk5LDkxLjY4NSwxNzMuNzY0LDgzLjUzLDE3Ni43OCw3NS44NTF6IE00NC41MywxMjMuMjUgICBjOS45NTgtMTcuMjQ5LDM5LjIzNS0yMy41OTcsODAuMzIxLTE3LjQxOGM4LjE1OSwxLjIyNywxNi42MDQsMi45MTEsMjUuMjcyLDUuMDIzYy01LjExMSwyMC43MTUtOC44NDksNDMuMjk0LTExLjA5OCw2Ny4wMDcgICBjLTE5LjM0NCwxMy43OTQtMzcuMDMsMjguMzQ1LTUyLjM4NSw0My4wODFjLTYuMTgyLTYuNDY3LTExLjg3OS0xMi45NTUtMTcuMDM0LTE5LjQyNEM0My43MTIsMTY5LjAyNiwzNC41NzIsMTQwLjQ5OCw0NC41MywxMjMuMjUgICB6IE00OC4wMjYsMjcxYzQuNjg3LDAsOC41LDMuODEzLDguNSw4LjVzLTMuODEzLDguNS04LjUsOC41cy04LjUtMy44MTMtOC41LTguNVM0My4zMzksMjcxLDQ4LjAyNiwyNzF6IE0xMjQuODUyLDM1Ny4xNjggICBjLTQxLjA4Myw2LjE3Ny03MC4zNjItMC4xNjktODAuMzIxLTE3LjQxOGMtNi41MjQtMTEuMzAyLTMuODc0LTI1LjYxOCwwLjMxNi0zNi45NzFjMS4wNDEsMC4xNDEsMi4xMDEsMC4yMjEsMy4xNzksMC4yMjEgICBjMTIuOTU4LDAsMjMuNS0xMC41NDIsMjMuNS0yMy41YzAtNS4zNDktMS44LTEwLjI4My00LjgyMS0xNC4yMzdjNS44NDUtNy42NTEsMTIuNTIxLTE1LjM4NywxOS45MjYtMjMuMTIxICAgYzE1LjM2NCwxNC43NjEsMzMuMDIxLDI5LjI2NSw1Mi40LDQzLjA0OGMyLjI0OSwyMy42OTMsNS45ODUsNDYuMjU0LDExLjA5Myw2Ni45NTQgICBDMTQxLjQ1NiwzNTQuMjU3LDEzMy4wMSwzNTUuOTQxLDEyNC44NTIsMzU3LjE2OHogTTI4Ny4yNywzODcuMTQ5QzI3Mi4wNzcsNDI1LjgyLDI1MS45NDIsNDQ4LDIzMi4wMjYsNDQ4ICAgYy0xOS45MTcsMC00MC4wNTMtMjIuMTgtNTUuMjQ1LTYwLjg1MWMtMy4wMTctNy42NzktNS43ODEtMTUuODM1LTguMjg1LTI0LjM5OGMyMC40OTMtNS45Myw0MS45MTUtMTMuOTgyLDYzLjU3My0yMy44OSAgIGMyMS42MzEsOS44NjgsNDMuMDY4LDE3LjkxLDYzLjUwMywyMy44MzhDMjkzLjA2MywzNzEuMjgxLDI5MC4yOTMsMzc5LjQ1NCwyODcuMjcsMzg3LjE0OXogTTM2OC4wMjYsMzc2ICAgYy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41czMuODEzLTguNSw4LjUtOC41czguNSwzLjgxMyw4LjUsOC41UzM3Mi43MTIsMzc2LDM2OC4wMjYsMzc2eiBNNDE5LjUyLDMzOS43NSAgIGMtNS4xOCw4Ljk3Mi0xNS4zNDIsMTQuOTQ2LTMwLjIwNywxNy44MWMtMy43NTItOC4wMDItMTEuODgxLTEzLjU2LTIxLjI4Ny0xMy41NmMtOS42MjYsMC0xNy45MTUsNS44Mi0yMS41NDMsMTQuMTI1ICAgYy0xMC4zMTMtMS4yMTUtMjEuMjE4LTMuMjQyLTMyLjU0Ny02LjAxM2M1LjEwNC0yMC42OTEsOC44MzctNDMuMjQsMTEuMDg1LTY2LjkyMWMxOS4zOTQtMTMuNzk0LDM3LjA2NS0yOC4zMTEsNTIuNDM3LTQzLjA4MyAgIGM2LjE2NCw2LjQ1LDExLjg0NSwxMi45MjIsMTYuOTg3LDE5LjM3NEM0MjAuMzM4LDI5My45NzQsNDI5LjQ3OCwzMjIuNTAyLDQxOS41MiwzMzkuNzV6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />\r\n</a>\r\n\r\n<ul style=\"position: absolute; top: 0px; left: 0px; margin: 20px;\">\r\n    <li>\r\n        <a ui-sref-params=\"{lang: \'pl\'}\">pl</a>\r\n        <a ui-sref-params=\"{lang: \'en\'}\">en</a>\r\n    </li>\r\n</ul>");
$templateCache.put("mainnav.tpl.html","<a ui-sref=\'app.map\'>\r\n    <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2MyA0NjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2MyA0NjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0yMzksOTYuMTY2Vjc4LjI3N2MxOC4yMDUtMy41MTUsMzItMTkuNTYxLDMyLTM4Ljc3N0MyNzEsMTcuNzIsMjUzLjI4LDAsMjMxLjUsMFMxOTIsMTcuNzIsMTkyLDM5LjUgICBjMCwxOS4yMTYsMTMuNzk1LDM1LjI2MiwzMiwzOC43Nzd2MTcuODg5QzEyNi4yODMsMTAwLjExNSw0OCwxODAuODMxLDQ4LDI3OS41QzQ4LDM4MC42ODIsMTMwLjMxOCw0NjMsMjMxLjUsNDYzICAgUzQxNSwzODAuNjgyLDQxNSwyNzkuNUM0MTUsMTgwLjgzMSwzMzYuNzE3LDEwMC4xMTUsMjM5LDk2LjE2NnogTTIwNywzOS41YzAtMTMuNTA5LDEwLjk5MS0yNC41LDI0LjUtMjQuNVMyNTYsMjUuOTkxLDI1NiwzOS41ICAgYzAsMTAuODk0LTcuMTQ5LDIwLjE0Ni0xNywyMy4zMjFWNTUuNWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNXY3LjMyMUMyMTQuMTQ5LDU5LjY0NiwyMDcsNTAuMzk0LDIwNywzOS41eiAgICBNMjMxLjUsNDQ4QzEzOC41ODksNDQ4LDYzLDM3Mi40MTEsNjMsMjc5LjVTMTM4LjU4OSwxMTEsMjMxLjUsMTExUzQwMCwxODYuNTg5LDQwMCwyNzkuNVMzMjQuNDExLDQ0OCwyMzEuNSw0NDh6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMjMxLjUsMTI4QzE0Ny45NjIsMTI4LDgwLDE5NS45NjIsODAsMjc5LjVTMTQ3Ljk2Miw0MzEsMjMxLjUsNDMxUzM4MywzNjMuMDM4LDM4MywyNzkuNVMzMTUuMDM4LDEyOCwyMzEuNSwxMjh6ICAgIE0yMzEuNSw0MTZDMTU2LjIzNCw0MTYsOTUsMzU0Ljc2Niw5NSwyNzkuNVMxNTYuMjM0LDE0MywyMzEuNSwxNDNTMzY4LDIwNC4yMzQsMzY4LDI3OS41UzMwNi43NjYsNDE2LDIzMS41LDQxNnoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yMDgsMjc5LjVjMCwxMi45NTgsMTAuNTQyLDIzLjUsMjMuNSwyMy41czIzLjUtMTAuNTQyLDIzLjUtMjMuNVMyNDQuNDU4LDI1NiwyMzEuNSwyNTZTMjA4LDI2Ni41NDIsMjA4LDI3OS41eiAgICBNMjMxLjUsMjcxYzQuNjg3LDAsOC41LDMuODEzLDguNSw4LjVzLTMuODEzLDguNS04LjUsOC41cy04LjUtMy44MTMtOC41LTguNVMyMjYuODEzLDI3MSwyMzEuNSwyNzF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMzA4LjU0NSwxOTIuNjA2bC05Ny4yOTMsNDEuNjk3Yy0xMS4yNjIsNC44MjYtMjAuMTIzLDEzLjY4Ny0yNC45NDksMjQuOTQ4bC00MS42OTcsOTcuMjkzICAgYy0xLjIwOCwyLjgxOS0wLjU3OCw2LjA4OSwxLjU5LDguMjU4YzEuNDM2LDEuNDM2LDMuMzU0LDIuMTk3LDUuMzA1LDIuMTk3YzAuOTk2LDAsMi0wLjE5OCwyLjk1My0wLjYwNmw5Ny4yOTMtNDEuNjk3ICAgYzExLjI2Mi00LjgyNiwyMC4xMjMtMTMuNjg2LDI0Ljk0OS0yNC45NDhsNDEuNjk3LTk3LjI5NGMxLjIwOC0yLjgxOSwwLjU3OC02LjA4OS0xLjU5LTguMjU4ICAgQzMxNC42MzUsMTkyLjAyOSwzMTEuMzY1LDE5MS4zOTksMzA4LjU0NSwxOTIuNjA2eiBNMjYyLjkwOSwyOTMuODM5Yy0zLjMwMiw3LjcwNi05LjM2NSwxMy43NjgtMTcuMDcsMTcuMDdMMTY1Ljc4LDM0NS4yMiAgIGwzNC4zMTEtODAuMDZjMy4zMDItNy43MDYsOS4zNjQtMTMuNzY4LDE3LjA3LTE3LjA3bDgwLjA2LTM0LjMxMUwyNjIuOTA5LDI5My44Mzl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMjMxLjUsMTkxYzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjV2LTE2YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVzLTcuNSwzLjM1OC03LjUsNy41djE2ICAgQzIyNCwxODcuNjQyLDIyNy4zNTgsMTkxLDIzMS41LDE5MXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yMzEuNSwzNjhjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjV2MTZjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTgsNy41LTcuNXYtMTYgICBDMjM5LDM3MS4zNTgsMjM1LjY0MiwzNjgsMjMxLjUsMzY4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTEzNS41LDI3MmgtMTZjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTgsNy41LDcuNSw3LjVoMTZjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNVMxMzkuNjQyLDI3MiwxMzUuNSwyNzJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMzQzLjUsMjcyaC0xNmMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXMzLjM1OCw3LjUsNy41LDcuNWgxNmM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41UzM0Ny42NDIsMjcyLDM0My41LDI3MnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\" />\r\n\r\n    <h2>{{ \'MAP_LABEL\' | translate }}</h2></a>\r\n<a ui-sref=\'app.shops\'>\r\n\r\n    <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2MyA0NjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2MyA0NjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0zNjcuNSwzMmgtNTcuNzM0Yy0zLjEzOC05LjI5LTExLjkzLTE2LTIyLjI2Ni0xNmgtMjQuNDE2Yy03LjQxLTkuOTY1LTE5LjE0OC0xNi0zMS41ODQtMTYgICBjLTEyLjQzNSwwLTI0LjE3NCw2LjAzNS0zMS41ODUsMTZIMTc1LjVjLTEwLjMzNiwwLTE5LjEyOCw2LjcxLTIyLjI2NiwxNkg5NS41Qzc4LjEzMSwzMiw2NCw0Ni4xMzEsNjQsNjMuNXYzNjggICBjMCwxNy4zNjksMTQuMTMxLDMxLjUsMzEuNSwzMS41aDI3MmMxNy4zNjksMCwzMS41LTE0LjEzMSwzMS41LTMxLjV2LTM2OEMzOTksNDYuMTMxLDM4NC44NjksMzIsMzY3LjUsMzJ6IE0xNzUuNSw4N2gxMTIgICBjNy4wMjMsMCwxMy4zMzItMy4xMDEsMTcuNjQxLThIMzUydjMzN0gxMTFWNzloNDYuODU5QzE2Mi4xNjgsODMuODk5LDE2OC40NzcsODcsMTc1LjUsODd6IE0xNzUuNSwzMWgyOC40MzggICBjMi42NywwLDUuMTM5LTEuNDE5LDYuNDgyLTMuNzI3QzIxNC44OTMsMTkuNTg4LDIyMi43NzMsMTUsMjMxLjUsMTVjOC43MjgsMCwxNi42MDcsNC41ODgsMjEuMDc5LDEyLjI3MiAgIGMxLjM0MywyLjMwOCwzLjgxMywzLjcyOCw2LjQ4MiwzLjcyOEgyODcuNWM0LjY4NywwLDguNSwzLjgxMyw4LjUsOC41djI0YzAsNC42ODctMy44MTMsOC41LTguNSw4LjVoLTExMiAgIGMtNC42ODcsMC04LjUtMy44MTMtOC41LTguNXYtMjRDMTY3LDM0LjgxMywxNzAuODEzLDMxLDE3NS41LDMxeiBNMzg0LDQzMS41YzAsOS4wOTgtNy40MDIsMTYuNS0xNi41LDE2LjVoLTI3MiAgIGMtOS4wOTgsMC0xNi41LTcuNDAyLTE2LjUtMTYuNXYtMzY4Qzc5LDU0LjQwMiw4Ni40MDIsNDcsOTUuNSw0N0gxNTJ2MTYuNWMwLDAuMTY4LDAuMDA5LDAuMzMzLDAuMDEzLDAuNUgxMDMuNSAgIGMtNC4xNDMsMC03LjUsMy4zNTgtNy41LDcuNXYzNTJjMCw0LjE0MiwzLjM1Nyw3LjUsNy41LDcuNWgyNTZjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXYtMzUyYzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVoLTQ4LjUxMyAgIGMwLjAwNC0wLjE2NywwLjAxMy0wLjMzMiwwLjAxMy0wLjVWNDdoNTYuNWM5LjA5OCwwLDE2LjUsNy40MDIsMTYuNSwxNi41VjQzMS41eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTIzMS41LDQ3YzEuOTc5LDAsMy45MS0wLjgsNS4zLTIuMmMxLjQtMS4zOSwyLjItMy4zMywyLjItNS4zYzAtMS45Ny0wLjgtMy45MS0yLjItNS4zYy0xLjM5LTEuNC0zLjMyLTIuMi01LjMtMi4yICAgYy0xLjk4LDAtMy45MSwwLjgtNS4zLDIuMmMtMS40LDEuMzktMi4yLDMuMzItMi4yLDUuM3MwLjgsMy45MSwyLjIsNS4zQzIyNy41OSw0Ni4yLDIyOS41Miw0NywyMzEuNSw0N3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xODMuNSwxNTloMTM2YzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC0xMzZjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjVTMTc5LjM1NywxNTksMTgzLjUsMTU5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTE4My41LDIzOWgxMzZjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTEzNmMtNC4xNDMsMC03LjUsMy4zNTgtNy41LDcuNVMxNzkuMzU3LDIzOSwxODMuNSwyMzl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTgzLjUsMzE5aDI0YzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC0yNGMtNC4xNDMsMC03LjUsMy4zNTgtNy41LDcuNVMxNzkuMzU3LDMxOSwxODMuNSwzMTl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTgzLjUsMTk5aDEzNmM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtMTM2Yy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41UzE3OS4zNTcsMTk5LDE4My41LDE5OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xODMuNSwyNzloMzJjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTMyYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41UzE3OS4zNTcsMjc5LDE4My41LDI3OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xODMuNSwzNTloMzJjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTMyYy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41UzE3OS4zNTcsMzU5LDE4My41LDM1OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xNDMuNSwxNTloOGM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtOGMtNC4xNDMsMC03LjUsMy4zNTgtNy41LDcuNVMxMzkuMzU3LDE1OSwxNDMuNSwxNTl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTQzLjUsMjM5aDhjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLThjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjVTMTM5LjM1NywyMzksMTQzLjUsMjM5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTE0My41LDMxOWg4YzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC04Yy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41UzEzOS4zNTcsMzE5LDE0My41LDMxOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0xNDMuNSwxOTloOGM0LjE0MywwLDcuNS0zLjM1OCw3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtOGMtNC4xNDMsMC03LjUsMy4zNTgtNy41LDcuNVMxMzkuMzU3LDE5OSwxNDMuNSwxOTl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTQzLjUsMjc5aDhjNC4xNDMsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLThjLTQuMTQzLDAtNy41LDMuMzU4LTcuNSw3LjVTMTM5LjM1NywyNzksMTQzLjUsMjc5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTE0My41LDM1OWg4YzQuMTQzLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC04Yy00LjE0MywwLTcuNSwzLjM1OC03LjUsNy41UzEzOS4zNTcsMzU5LDE0My41LDM1OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yNzkuNSwyNjRjLTI2LjE5MSwwLTQ3LjUsMjEuMzA5LTQ3LjUsNDcuNXMyMS4zMDksNDcuNSw0Ny41LDQ3LjVjMTAuNTgzLDAsMjAuMzY3LTMuNDgyLDI4LjI3Mi05LjM1NyAgIGMwLjA3NC0wLjA1MiwwLjE1NS0wLjA4OCwwLjIyOC0wLjE0M2MwLjItMC4xNSwwLjM4OS0wLjMwOSwwLjU3LTAuNDc0QzMxOS43NzEsMzQwLjMyOSwzMjcsMzI2Ljc0NywzMjcsMzExLjUgICBDMzI3LDI4NS4zMDksMzA1LjY5MSwyNjQsMjc5LjUsMjY0eiBNMjcyLDI3OS44ODNWMzA0aC0yNC4xMTdDMjUwLjcwOCwyOTIuMDk0LDI2MC4wOTQsMjgyLjcwOCwyNzIsMjc5Ljg4M3ogTTI0Ny44ODMsMzE5aDI3Ljg2NyAgIGwxNi43MTksMjIuMjkyYy0zLjk3NiwxLjczNy04LjM2LDIuNzA4LTEyLjk2OSwyLjcwOEMyNjQuMTYxLDM0NCwyNTEuMjc5LDMzMy4zMTUsMjQ3Ljg4MywzMTl6IE0zMDQuNDYzLDMzMi4yODRMMjg3LDMwOXYtMjkuMTE3ICAgYzE0LjMxNSwzLjM5NiwyNSwxNi4yNzgsMjUsMzEuNjE3QzMxMiwzMTkuMzk4LDMwOS4xNjUsMzI2LjY0NiwzMDQuNDYzLDMzMi4yODR6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />\r\n    <h2>{{ \'SHOPS_LABEL\' | translate }}</h2></a>");
$templateCache.put("searchbar.tpl.html","{{ \'SEARCH_LABEL\' | translate }} <input type=\"text\" placeholder=\"Dziadek Stary Komuch\" ng-model=\"vm.input\" ng-change=\"vm.update()\"> ?");
$templateCache.put("sidebar.tpl.html","<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <a ui-sref-params=\"{shopName: \'\'}\" style=\"float: right; margin-right: 20px;\"> X </a>\r\n            <h3>\r\n                {{vm.currentShop.name}} <br>\r\n                <small>\r\n                    {{vm.currentShop.category}}\r\n                </small>\r\n            </h3>\r\n            <p>\r\n                <img ng-src=\"{{vm.currentShop.logo_url}}\" alt=\"\">\r\n            </p>\r\n            <p>\r\n                {{vm.currentShop.description}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>");}]);