(this.webpackJsonpkaraoke = this.webpackJsonpkaraoke || []).push([[0], {
    21: function(e, t, a) {
        e.exports = {
            container: "Player_container__2-z7F",
            isDisabled: "Player_isDisabled__1RzKP",
            buttonContainer: "Player_buttonContainer__3P0SV",
            playPauseButton: "Player_playPauseButton__36CDv",
            content: "Player_content__2puHM",
            progress: "Player_progress__1trAA",
            isProgress: "Player_isProgress__3ZaLU",
            dragDropMessage: "Player_dragDropMessage__3l6xU",
            isDragEnter: "Player_isDragEnter__2csAd",
            waveForm: "Player_waveForm__1NeSa"
        }
    },
    218: function(e, t) {
        e.exports = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAIppAACKaQGxZbMyAAADGUlEQVRIx53WW4jVVRTH8d9k4mWMvA5ahJg5mIU9CAUhUSAIlhRESTd6iMQo6EGIQoLKwpAQMhLq0SIhMG+FCFEUhCBjZWoXLwxmSokpXvI+8+nBPeM5czlzztnn6fzX2mt991p7r7WSGkvEREv96Kxz9lqmTaTJJeI2m13Ws67YZGrTJsV4W/Rda41qyqCIJa6AC3622yVw1sKmGEWbHeCy5SZos6YwbtHasEERiwvfdpNEzLC/aUYxyfaSiOel/N4sjJsbZBTxXMnuDm16vs5woClGMcEPhe+Fnq1NM4p4tuS0w2SVkmYYxXjfgy4vVW5rilHE0y6Cn9ykr7RRRjHWt6Dby323NMwo4onCt8vNBtJohFHc6OvCt3Qg9T6Mow1hLh53Aexxi8G0rjE+VJNR3GBb8f7KYKoi3qqDUcSjzoNfTVXLcXsdjGKMrcXza7WOUsW4aRBGEY84B343rXb26mAUrb4sXl8f6joMyShiobNgn+lDv4AhGMVom4rHN+p5UjUZRSxwBhzQXl8VqcEoRllfvL1db1kalFHEfKdBp5n1V2LR7mA/RjHS58XTikZK+4CMIuY5BQ6Z1Vg3q2J8UCRihHXFy0otDRuM5ZWMLZL7syFjkxzOguxpqVJPMip3ZHampCuH80v250LSR6c9W3Nrkv+yKF/FCJ8UD6uq+cRw82x0QnfpMMd8YYER/fpMD+MGrTHfcfCXu6rUWtzpIyf7DUunrTXHdVW6PXE87bH03r/3e5RETLHMoQozXboq/h31zrWxropxWwrfP+b0DhxjPKOjwsBB71rkKavsK4en215LjLtqVMz0JziZ0tB3m+hq1B6wpTQB+NcHZmpxNQjTrfR3r+ySbyw0UsQ4O8HFOFJu0WJjzbbGid4N5210n+urojXMPdaVqgRnfOpuEywulaAzPu4V7XK0ImY7PKl1wL480sO+qxiUj9lbXHRbHbP81C+TnV41uWaTGu9Fv/VGtGd1aI+Yq6NCdNyHbh/qxYiYZkXFmbrtdK/eWf89fzjliPXmG153+Rpmrs8cdU6n1dpF/gcWkQSGzoDLxwAAAABJRU5ErkJggg=="
	},
    242: function(e, t, a) {
        e.exports = a(273)
    },
    261: function(e, t) {},
    263: function(e, t) {},
    273: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "theme", (function() {
            return Fe
        }
        ));
        var n, r = a(0), l = a.n(r), o = a(11), i = a.n(o), s = a(320), c = a(231), u = a(321), d = a(18), m = a(323), p = a(14), g = a(311), h = a(312), f = a(313), v = a(120), b = a(223), y = a(314), E = a(19), A = a.n(E), O = a(20), w = a(309), j = a(218), C = a.n(j), P = a(71), S = a.n(P);
        !function(e) {
            e.RU = "RU",
            e.EN = "EN"
        }(n || (n = {}));
        var x, k, L = Object(r.createContext)({
            language: n.RU,
            toggleLanguage: function() {},
            waveForm: null,
            setWaveForm: function() {},
            isPlaying: !1,
            setPlaying: function() {},
            url: "",
            setUrl: function() {}
        }), M = function(e) {
            var t = e.children
              , a = Object(r.useState)(sessionStorage.getItem("lang") || n.RU)
              , o = Object(p.a)(a, 2)
              , i = o[0]
              , s = o[1]
              , c = Object(r.useState)(null)
              , u = Object(p.a)(c, 2)
              , d = u[0]
              , m = u[1]
              , g = Object(r.useState)(!1)
              , h = Object(p.a)(g, 2)
              , f = h[0]
              , v = h[1]
              , b = Object(r.useState)("")
              , y = Object(p.a)(b, 2)
              , E = y[0]
              , A = y[1];
            return l.a.createElement(L.Provider, {
                value: {
                    language: i,
                    toggleLanguage: function(e) {
                        s(e),
                        sessionStorage.setItem("lang", e)
                    },
                    waveForm: d,
                    setWaveForm: m,
                    isPlaying: f,
                    setPlaying: v,
                    url: E,
                    setUrl: A
                }
            }, t)
        }, T = function() {
            return l.a.useContext(L)
        }, F = a(219), N = new function e() {
            Object(F.a)(this, e),
            this.headerHelpLink = "headerHelpLink",
            this.helpModalText = "helpText",
            this.startMessage = "startMessage",
            this.workMessage = "workMessage",
            this.inputPlaceholderAuthor = "inputPlaceholderAuthor",
            this.inputPlaceholderTrackName = "inputPlaceholderTrackName",
            this.inputPlaceholderText = "inputPlaceholderText",
            this.errorNextLevelTitle = "errorNextLevelTitle",
            this.errorNextLevelMessage = "errorNextLevelMessage",
            this.errorNextLevelClose = "errorNextLevelClose",
            this.errorPlayTitle = "errorPlayTitle",
            this.errorPlayMessage = "errorPlayMessage",
            this.errorPlayClose = "errorPlayClose",
            this.playerReset = "playerReset",
            this.playerStatusNoPlaying = "playerStatusNoPlaying",
            this.playerStatusPlaying = "playerStatusPlaying",
            this.dragDropMessage = "dragDropMessage",
            this.errorFileFormatTitle = "errorFileFormatTitle",
            this.errorFileFormatMessage = "errorFileFormatMessage",
            this.errorFileFormatClose = "errorFileFormatClose",
            this.successDownloadTTMLFile = "successDownloadTTMLFile",
            this.successResetThisTrackLink = "successResetThisTrackLink",
            this.successResetAppLink = "successResetAppLink"
        }
        , _ = a(310), R = a(119), D = a(324), U = a(5), I = a(307), H = a(303), W = a(305), z = a(306), B = a(304), Y = a(299), Q = l.a.forwardRef((function(e, t) {
            return l.a.createElement(Y.a, Object.assign({
                direction: "up",
                ref: t
            }, e))
        }
        )), G = Object(U.a)((function(e) {
            return Object(D.a)({
                root: {
                    margin: 0,
                    padding: e.spacing(2)
                },
                closeButton: {
                    position: "absolute",
                    right: e.spacing(1),
                    top: e.spacing(1),
                    color: e.palette.grey[500]
                }
            })
        }
        ))((function(e) {
            var t = e.children
              , a = e.classes
              , n = e.onClose
              , r = Object(R.a)(e, ["children", "classes", "onClose"]);
            return l.a.createElement(H.a, Object.assign({
                disableTypography: !0,
                className: a.root
            }, r), t && l.a.createElement(v.a, {
                variant: "h6"
            }, t), n ? l.a.createElement(B.a, {
                "aria-label": "close",
                className: a.closeButton,
                onClick: n
            }, l.a.createElement(A.a, {
                path: O.b,
                size: 1
            })) : null)
        }
        )), J = Object(U.a)((function(e) {
            return {
                root: {
                    padding: e.spacing(2)
                }
            }
        }
        ))(W.a), V = Object(U.a)((function(e) {
            return {
                root: {
                    margin: 0,
                    padding: e.spacing(1)
                }
            }
        }
        ))(z.a), X = function(e) {
            var t = e.children
              , a = e.title
              , n = e.open
              , r = e.onClose
              , o = e.actions
              , i = Object(R.a)(e, ["children", "title", "open", "onClose", "actions"]);
            return l.a.createElement(I.a, Object.assign({
                onClose: r,
                fullWidth: !0,
                open: n,
                TransitionComponent: Q
            }, i, {
                scroll: "body"
            }), l.a.createElement(G, {
                onClose: r
            }, a), l.a.createElement(J, null, t), o && l.a.createElement(V, null, o))
        }, Z = function(e) {
            var t = e.open
              , a = e.onClose;
            return l.a.createElement(X, {
                open: t,
                onClose: a,
                maxWidth: "md"
            }, l.a.createElement(w.a, {
                id: N.helpModalText,
                values: {
                    h6: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(v.a, {
                            variant: "h6",
                            align: "center",
                            gutterBottom: !0
                        }, t)
                    },
                    p: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(v.a, {
                            gutterBottom: !0
                        }, t)
                    },
                    div: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(v.a, null, t)
                    },
                    ul: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement("ul", null, t)
                    },
                    ol: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement("ol", null, t)
                    },
                    ola: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement("ol", {
                            type: "a"
                        }, t)
                    },
                    li: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement("li", null, t)
                    },
                    a: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(_.a, {
                            target: "_blank",
                            href: "https://help.apple.com/itc/musicstyleguide/en.lproj/static.html#itccfbeba319"
                        }, t)
                    }
                }
            }))
        }, q = function() {
            var e = l.a.useState(null)
              , t = Object(p.a)(e, 2)
              , a = t[0]
              , r = t[1]
              , o = T()
              , i = o.language
              , s = o.toggleLanguage
              , c = l.a.useState(!1)
              , u = Object(p.a)(c, 2)
              , d = u[0]
              , m = u[1]
              , E = function(e) {
                var t = e.currentTarget.innerText;
                s(t),
                r(null)
            };
            return l.a.createElement(g.a, {
                position: "static",
                color: "transparent",
                className: S.a.appBar,
                elevation: 0
            }, l.a.createElement(h.a, null, l.a.createElement("img", {
                src: C.a,
                alt: "",
                className: S.a.logo
            }), l.a.createElement("div", {
                style: {
                    flex: 1
                }
            }), l.a.createElement(f.a, {
                className: S.a.button,
                onClick: function() {
                    m(!0)
                }
            }, l.a.createElement(w.a, {
                id: N.headerHelpLink
            })), l.a.createElement(Z, {
                open: d,
                onClose: function() {
                    m(!1)
                }
            }), l.a.createElement(f.a, {
                onClick: function(e) {
                    r(e.currentTarget)
                },
                className: S.a.select
            }, l.a.createElement(v.a, {
                color: "inherit"
            }, i), l.a.createElement(A.a, {
                path: O.e,
                size: 1,
                style: {
                    color: "inherit"
                }
            })), l.a.createElement(b.a, {
                anchorEl: a,
                keepMounted: !0,
                open: Boolean(a),
                onClose: function() {
                    r(null)
                },
                getContentAnchorEl: null,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                }
            }, l.a.createElement(y.a, {
                onClick: E,
                selected: i === n.EN
            }, n.EN), l.a.createElement(y.a, {
                onClick: E,
                selected: i === n.RU
            }, n.RU))))
        }, K = a(6), $ = (x = {},
        Object(K.a)(x, N.headerHelpLink, "Как это работает?"),
        Object(K.a)(x, N.helpModalText, '\n<h6>«антистиль клаб» предоставляет своим партнёрам создавать и загружать синхронизированные тексты песен в Apple Music.</h6>\n\n<p>В Apple Music синхронизированные тексты песен (Time Synced Lyrics) автоматически прокручиваются вместе с песней. Это так называемый стиль караоке, так что слушатели могут следовать (и петь) вместе.</p>\n<div>Мы постарались сделать интерфейс синхронизации текстов песен очень простым:</div>\n<ol>\n\t<li>\n\t\tЗагрузите MP3 или WAV файл песни.\n\t</li>\n\t<li>\n\t\tЗаполните поле «Имя исполнителя». Необходимо указывать имя или имена в соответствии с названием в треке. Если несколько исполнителей у песни, то указывайте имена исполнителей через запятую. Обязательно указывайте имена исполнителей точно также как это у вас они прописаны в личном кабинете. Чтобы не ошибиться, просто скопируйте имя артиста из личного кабинета.\n\t</li>\n\t<li>\n\t\tЗаполните поле «Название композиции». Обязательно название трека должно полностью совпадать с названием трека, как он указан в вашем личном кабинете. Чтобы не ошибиться, просто скопируйте имя артиста из личного кабинета.\n\t</li>\n\t<li>\n\t\tЗаполните поле «Текст песни». Обязательно следуйте следующим требованиям при добавлении текста:\n\t\t\n\t\t<ola>\n\t\t\t<li>\n\t\t\t\tНе используйте дополнительный текст, например – «вступление», «хор», ссылки в социальных сетях и т.д.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tЗаписывайте все слова — даже если секция повторяется. Повторные строки должны быть выписаны.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tНе пишите "Припев", "Припев 2раза" и т.д.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tНачинайте каждую строку с заглавной буквы\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tНе используйте пунктуацию в конце строки.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tНе используйте в конце каждой строчки знаки препинания - запятая, точка и т.д.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tНе включайте пустые строки, кроме как между стихами или хором\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tИзбегайте ввода чрезмерно длинных строк. Используйте одно предложение в строке.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tНе подвергайте цензуре Explicit текст, если эти слова не пропущены в аудиозаписи. Пример: не вводите "F ***", если слово не было пропущено или "запикано". Чтобы ознакомиться с полными требованиями к текстам песен в Apple Music, посетите страницу <a>https://help.apple.com/itc/musicstyleguide/en.lproj/static.html#itccfbeba319</a>\n\t\t\t</li>\n\t\t</ola>\n\t\t\n\t\t<li>\n\t\t\tНажмите «Продолжить» или Play. Вы перейдёте на страницу записи. После нажатия Play начнется проигрывание музыки, отмечайте строки в тексте в соответствии с музыкой нажимая и удерживая клавишу «Пробел». После окончания записи Вы будете перемещены на страницу, где вы сможете скачать сформированный файл или записать трек еще раз.\n\t\t</li>\n\t\t<li>\n\t\t\tПерейдите в Личный кабинет и добавьте к треку в поле "Synced Lyrics" сформированный файл. И отправьте свой релиз на модерацию.\n\t\t</li>\n\t</li>\n</ol>\n\n<div>Вы можете подгружать такие файлы как к новым релизам, так и к уже ранее выпущенным (через функцию редактирование). В данном случае, пожалуйста, укажите в поле "Дополнительная информация об альбоме" Synced Lyrics, чтобы наша команда модерации была в курсе, что именно вы редактировали.</div>\n\t'),
        Object(K.a)(x, N.startMessage, "Добавьте аудиофайл в формате MP3/WAV и текст песни, после нажмите <a>продолжить</a> или Play"),
        Object(K.a)(x, N.workMessage, "<p>Держите пробел НАЖАТЫМ когда вы слышите начало строки.</p><p>ОТПУСТИТЕ когда строка будет закончена.</p><p>ПОВТОРИТЕ действие до конца текста.</p><p>BACKSPACE отменить выбор строки.</p><p><reset>Сбросить текущие отметки</reset></p><return>Вернуться к редактированию текста или данных композиции</return>"),
        Object(K.a)(x, N.inputPlaceholderAuthor, "Введите имя исполнителя"),
        Object(K.a)(x, N.inputPlaceholderTrackName, "Введите название композиции"),
        Object(K.a)(x, N.inputPlaceholderText, "Поместите сюда текст песни"),
        Object(K.a)(x, N.errorNextLevelTitle, "Не добавлен файл или данные"),
        Object(K.a)(x, N.errorNextLevelMessage, "Прежде чем перейти к следующему этапу, выберете аудио файл и заполните все поля"),
        Object(K.a)(x, N.errorNextLevelClose, "Закрыть"),
        Object(K.a)(x, N.errorPlayTitle, "Не добавлен файл или данные"),
        Object(K.a)(x, N.errorPlayMessage, "Прежде чем запустить проигрывание, выберете аудио файл и заполните все поля"),
        Object(K.a)(x, N.errorPlayClose, "Закрыть"),
        Object(K.a)(x, N.playerReset, "СБРОСИТЬ"),
        Object(K.a)(x, N.playerStatusPlaying, "ЗАПИСЬ..."),
        Object(K.a)(x, N.playerStatusNoPlaying, "НАЖМИТЕ PLAY ЧТОБЫ НАЧАТЬ"),
        Object(K.a)(x, N.dragDropMessage, "<b>Выберите аудио файл</b> или перетащите его сюда"),
        Object(K.a)(x, N.errorFileFormatTitle, "Неверный формат файла"),
        Object(K.a)(x, N.errorFileFormatMessage, "Используйте файл с расширением wav или mp3"),
        Object(K.a)(x, N.errorFileFormatClose, "Закрыть"),
        Object(K.a)(x, N.successDownloadTTMLFile, "Скачать TTML файл"),
        Object(K.a)(x, N.successResetThisTrackLinx, "Записать текущий трек ещё раз"),
        Object(K.a)(x, N.successResetAppLinx, "Вернуться в начало записать новый файл"),
		x), ee = (k = {},
        Object(K.a)(k, N.headerHelpLink, "How it works?"),
        Object(K.a)(k, N.helpModalText, '\n<h6>«antistyle club» provides partners with the ability to create and upload synchronized lyrics to Apple Music.</h6>\n\n<p>In Apple Music, lyrics automatically synced with the audio (Time Synced Lyrics). This is the so-called karaoke-style so that listeners can follow (and sing) along.</p>\n<div>We tried to make the lyrics synchronisation interface very simple:</div>\n<ol>\n\t<li>\n\t\tUpload the MP3 or WAV song file.\n\t</li>\n\t<li>\n\t\tFill in the field “Artist Name”. You must put the name or names in accordance with the name of the track. If there are several artists in a song, then put the names of artists separated by commas. Please make sure to write the names of the performers the same way as they have written in your personal account. To avoid any mistakes simply copy and paste the artist’s name from your personal account.\n\t</li>\n\t<li>\n\t\tFill in the “Song Name” field. Please make sure that the name of the track completely matches the name of the track written in your personal account. To avoid any mistakes simply copy and paste the artist’s name from your personal account.\n\t</li>\n\t<li>\n\t\tFill in the “Song lyrics” field. Be sure to follow these requirements when adding text:\n\t\t\n\t\t<ola>\n\t\t\t<li>\n\t\t\t\tDo not use additional words, for example - “introduction”, “chorus”, links to social networks’ profiles, etc.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tWrite all words - even if the section repeats. Duplicate lines should be written.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tDo not write "Chorus", "Chorus 2 times", etc.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tStart each line with a capital letter.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tDo not use punctuation at the end of a line.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tDo not use punctuation marks at the end of each line - a comma, period, etc.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tDo not include blank lines except between verses or chorus.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tAvoid entering excessively long lines. Use one sentence per line.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\tDo not censor or miss Explicit text if these words are not missing from the audio recording. Example: do not enter “F ***” if the word wasn’t omitted or “blipped”. For full song lyrics requirements at Apple Music, visit <a>https://help.apple.com/itc/musicstyleguide/en.lproj/static.html#itccfbeba319</a>\n\t\t\t</li>\n\t\t</ola>\n\t\t\n\t\t<li>\n\t\t\tClick ‘Continue’ or ‘Play’. You will be redirected to the posting page. After pressing Play, the music will start playing, mark the lines in the text according to the music by pressing and holding the Spacebar. After the recording is complete, you will be moved to a page where you can download the generated file or record the track again.\n\t\t</li>\n\t\t<li>\n\t\t\tGo to your Personal Account and add generated file to the track in the "Synced Lyrics" field. Submit your release for moderation.\n\t\t</li>\n\t</li>\n</ol>\n\n<div>You can upload generated files to new releases as well as to previously released ones (through the editing function). In this case, please indicate in the Additional Album Information field that you added Synced Lyrics so that our moderation team is aware of what you have edited.</div>\n\t'),
        Object(K.a)(k, N.startMessage, "Add an MP3/WAV audio file and lyrics, then click <a>continue</a> or Play"),
        Object(K.a)(k, N.workMessage, "<p>Keep the space PRESSED when you hear the beginning of a line.</p><p>RELEASE when the line is finished.</p><p>REPEAT until the end of the text.</p><p>BACKSPACE deselect row.</p><p><reset>Reset Current Marks</reset></p><return>Return to editing text or song data</return>"),
        Object(K.a)(k, N.inputPlaceholderAuthor, "Enter artist name"),
        Object(K.a)(k, N.inputPlaceholderTrackName, "Enter song title"),
        Object(K.a)(k, N.inputPlaceholderText, "Put the lyrics here"),
        Object(K.a)(k, N.errorNextLevelTitle, "No file or data added"),
        Object(K.a)(k, N.errorNextLevelMessage, "Before proceeding to the next step, select an audio file and fill in all fields"),
        Object(K.a)(k, N.errorNextLevelClose, "Close"),
        Object(K.a)(k, N.errorPlayTitle, "No file or data added"),
        Object(K.a)(k, N.errorPlayMessage, "Before starting playback, select an audio file and fill in all fields"),
        Object(K.a)(k, N.errorPlayClose, "Close"),
        Object(K.a)(k, N.playerReset, "RESET"),
        Object(K.a)(k, N.playerStatusPlaying, "RECORDING..."),
        Object(K.a)(k, N.playerStatusNoPlaying, "CLICK PLAY TO BEGIN"),
        Object(K.a)(k, N.dragDropMessage, "<b>Choose an audio file</b> or drag it here"),
        Object(K.a)(k, N.errorFileFormatTitle, "Invalid file format"),
        Object(K.a)(k, N.errorFileFormatMessage, "Use a file with the wav or mp3 extension"),
        Object(K.a)(k, N.errorFileFormatClose, "Close"),
        Object(K.a)(k, N.successDownloadTTMLFile, "Download TTML file"),
        Object(K.a)(k, N.successResetThisTrackLink, "Record current track again"),
        Object(K.a)(k, N.successResetAppLink, "Go back to the beginning write a new file"),
        k), te = a(233), ae = a(317), ne = a(318), re = a(224), le = a(225), oe = a.n(le), ie = a(42), se = a.n(ie), ce = a(322), ue = a(226), de = a.n(ue), me = a(232), pe = a(315), ge = a(316), he = a(228), fe = a.n(he), ve = a(21), be = a.n(ve), ye = function(e) {
            var t = e.disabled
              , a = e.onTogglePlaying
              , n = Object(r.useRef)(null)
              , o = Object(r.useState)(!1)
              , i = Object(p.a)(o, 2)
              , s = i[0]
              , c = i[1]
              , u = Object(r.useState)(0)
              , d = Object(p.a)(u, 2)
              , m = d[0]
              , g = d[1]
              , h = Object(r.useState)(!1)
              , b = Object(p.a)(h, 2)
              , y = b[0]
              , E = b[1]
              , j = Object(r.useState)(!1)
              , C = Object(p.a)(j, 2)
              , P = C[0]
              , S = C[1]
              , x = T()
              , k = x.waveForm
              , L = x.setWaveForm
              , M = x.isPlaying
              , F = x.url
              , _ = x.setUrl;
            Object(r.useEffect)((function() {
                M ? null === k || void 0 === k || k.play() : null === k || void 0 === k || k.pause()
            }
            ), [M, k]),
            Object(r.useEffect)((function() {
                if (n && F) {
                    var e = fe.a.create({
                        cursorWidth: 1,
                        container: n.current,
                        height: 60,
                        progressColor: Fe.palette.primary.main,
                        waveColor: Fe.palette.secondary.main,
                        cursorColor: Fe.palette.primary.main,
                        backend: /edge/i.test(window.navigator.appVersion) ? "MediaElementWebAudio" : "WebAudio",
                        interact: !1
                    });
                    L(e)
                }
            }
            ), [F]),
            Object(r.useEffect)((function() {
                null === k || void 0 === k || k.load(F),
                null === k || void 0 === k || k.on("loading", (function(e) {
                    s && g(e)
                }
                )),
                null === k || void 0 === k || k.on("ready", (function() {
                    setTimeout((function() {
                        return g(0)
                    }
                    ), 200),
                    c(!1)
                }
                ))
            }
            ), [k, F]);
            var R = function() {
                return E(!1)
            };
            return l.a.createElement("div", {
                className: se()(be.a.container, Object(K.a)({}, be.a.isDisabled, t))
            }, l.a.createElement(X, {
                title: l.a.createElement(w.a, {
                    id: N.errorFileFormatTitle
                }),
                open: y,
                onClose: R,
                actions: l.a.createElement(f.a, {
                    onClick: R,
                    color: "primary",
                    autoFocus: !0
                }, l.a.createElement(w.a, {
                    id: N.errorFileFormatClose
                }))
            }, l.a.createElement(pe.a, null, l.a.createElement(w.a, {
                id: N.errorFileFormatMessage
            }))), l.a.createElement("div", {
                className: be.a.buttonContainer
            }, l.a.createElement(B.a, {
                onFocus: function(e) {
                    return e.target.blur()
                },
                disabled: !F || s,
                classes: {
                    root: be.a.playPauseButton,
                    disabled: be.a.isDisabled
                },
                onClick: a
            }, M ? l.a.createElement(A.a, {
                path: O.f,
                size: 2
            }) : l.a.createElement(A.a, {
                path: O.g,
                size: 2
            }))), l.a.createElement("div", {
                className: be.a.content
            }, l.a.createElement("div", {
                className: se()(be.a.progress, Object(K.a)({}, be.a.isProgress, s))
            }, l.a.createElement(ge.a, {
                color: "primary",
                variant: "determinate",
                value: m
            })), !F && l.a.createElement(me.a, {
                onDrop: function(e) {
                    var t = e[0];
                    if (/(mp3|mpeg|wav)$/.test(t.type)) {
                        var a = new FileReader;
                        a.onabort = function() {
                            return c(!1)
                        }
                        ,
                        a.onerror = function() {
                            return c(!1)
                        }
                        ,
                        a.onprogress = function() {
                            return c(!0)
                        }
                        ,
                        a.onload = function() {
                            return _(URL.createObjectURL(t))
                        }
                        ,
                        a.readAsArrayBuffer(t)
                    } else
                        E(!0)
                },
                onDragLeave: function() {
                    return S(!1)
                },
                onDragEnter: function() {
                    return S(!0)
                }
            }, (function(e) {
                var t = e.getRootProps
                  , a = e.getInputProps;
                return l.a.createElement("section", null, l.a.createElement("div", t(), l.a.createElement("input", a()), l.a.createElement("div", {
                    className: se()(be.a.dragDropMessage, Object(K.a)({}, be.a.isDragEnter, P))
                }, l.a.createElement("div", {
                    className: be.a.iconContainer
                }, l.a.createElement(A.a, {
                    path: O.d,
                    size: 1.3
                })), l.a.createElement(v.a, {
                    component: "div"
                }, l.a.createElement(w.a, {
                    id: N.dragDropMessage,
                    values: {
                        b: function() {
                            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                            return l.a.createElement("b", null, t)
                        }
                    }
                })))))
            }
            )), !!F && l.a.createElement("div", {
                ref: n,
                className: be.a.waveForm
            })))
        }, Ee = a(7), Ae = a.n(Ee), Oe = function(e) {
            var t = e.children
              , a = e.value
              , n = e.index
              , r = e.className;
            return l.a.createElement(v.a, {
                className: r,
                component: "div",
                role: "tabpanel",
                hidden: a !== n
            }, a === n && t)
        }, we = function(e) {
            var t = e.isOpen
              , a = e.onClose;
            return l.a.createElement(X, {
                title: l.a.createElement(w.a, {
                    id: N.errorNextLevelTitle
                }),
                open: t,
                onClose: a,
                actions: l.a.createElement(f.a, {
                    onClick: a,
                    color: "primary",
                    autoFocus: !0
                }, l.a.createElement(w.a, {
                    id: N.errorNextLevelClose
                }))
            }, l.a.createElement(pe.a, null, l.a.createElement(w.a, {
                id: N.errorNextLevelMessage
            })))
        }, je = function(e) {
            var t = e.isOpen
              , a = e.onClose;
            return l.a.createElement(X, {
                title: l.a.createElement(w.a, {
                    id: N.errorPlayTitle
                }),
                open: t,
                onClose: a,
                actions: l.a.createElement(f.a, {
                    onClick: a,
                    color: "primary",
                    autoFocus: !0
                }, l.a.createElement(w.a, {
                    id: N.errorPlayClose
                }))
            }, l.a.createElement(pe.a, null, l.a.createElement(w.a, {
                id: N.errorPlayMessage
            })))
        }, Ce = a(229), Pe = a.n(Ce), Se = function(e) {
            var t, a, n = e.title, r = e.name, l = e.items;
            return Pe()([{
                tt: [{
                    _attr: (t = {
                        xmlns: "http://www.w3.org/ns/ttml"
                    },
                    Object(K.a)(t, "xmlns:tts", "http://www.w3.org/ns/ttml#styling"),
                    Object(K.a)(t, "xmlns:itunes", "http://itunes.apple.com/lyric-ttml-extensions"),
                    Object(K.a)(t, "xmlns:ttm", "http://www.w3.org/ns/ttml#metadata"),
                    Object(K.a)(t, "xml:lang", "en-US"),
                    t)
                }, {
                    head: [{
                        metadata: [Object(K.a)({}, "ttm:title", n)]
                    }, Object(K.a)({}, "ttm:agent", [{
                        _attr: (a = {},
                        Object(K.a)(a, "xml:id", "voice1"),
                        Object(K.a)(a, "type", "person"),
                        a)
                    }, Object(K.a)({}, "ttm:name", [{
                        _attr: {
                            type: "full"
                        }
                    }, r])])]
                }, {
                    body: [{
                        div: l.map((function(e) {
                            return {
                                p: [{
                                    _attr: {
                                        begin: e.begin,
                                        end: e.end
                                    }
                                }, e.text]
                            }
                        }
                        ))
                    }]
                }]
            }], {
                declaration: !0,
                indent: "  "
            })
        };
        window.onkeydown = function(e) {
            var t;
            return !(!["INPUT", "TEXTAREA"].includes(null === (t = e.target) || void 0 === t ? void 0 : t.tagName) && "Space" === e.code)
        }
        ;
        var xe = 0
          , ke = !1
          , Le = function() {
            var e = Object(r.useState)(0)
              , t = Object(p.a)(e, 2)
              , a = t[0]
              , n = t[1]
              , o = Object(r.useState)("")
              , i = Object(p.a)(o, 2)
              , s = i[0]
              , c = i[1]
              , u = Object(r.useState)("")
              , m = Object(p.a)(u, 2)
              , g = m[0]
              , h = m[1]
              , b = Object(r.useState)("")
              , y = Object(p.a)(b, 2)
              , E = y[0]
              , j = y[1]
              , C = Object(r.useState)(0)
              , P = Object(p.a)(C, 2)
              , S = P[0]
              , x = P[1]
              , k = Object(r.useRef)(null)
              , L = Object(ae.a)()
              , M = Object(r.useState)(0)
              , F = Object(p.a)(M, 2)
              , R = F[0]
              , D = F[1]
              , U = Object(r.useState)([])
              , I = Object(p.a)(U, 2)
              , H = I[0]
              , W = I[1]
              , z = Object(r.useState)(!1)
              , B = Object(p.a)(z, 2)
              , Y = B[0]
              , Q = B[1]
              , G = Object(r.useState)(!1)
              , J = Object(p.a)(G, 2)
              , V = J[0]
              , X = J[1]
              , Z = T()
              , q = Z.waveForm
              , $ = Z.setWaveForm
              , ee = Z.setPlaying
              , le = Z.isPlaying
              , ie = Z.setUrl;
            Object(r.useEffect)((function() {
                if (1 === a) {
                    var e = me();
                    null === e || void 0 === e || e.forEach((function(e, t) {
                        t === S && (e.classList.add(Ae.a.textStrIsSelected),
                        ge(1300))
                    }
                    ))
                }
            }
            ), [a]),
            Object(r.useEffect)((function() {
                null === q || void 0 === q || q.on("seek", (function(e) {
                    xe = e * q.getDuration() * 1e3
                }
                )),
                null === q || void 0 === q || q.on("audioprocess", (function(e) {
                    xe = 1e3 * e
                }
                ))
            }
            ), [q]);
            var ue = s.split("\n").length
              , me = function() {
                var e;
                return null === (e = k.current) || void 0 === e ? void 0 : e.querySelectorAll(".".concat(Ae.a.textStr))
            }
              , pe = {
                START: function(e) {
                    null === e || void 0 === e || e.preventDefault(),
                    null === e || void 0 === e || e.stopPropagation();
                    var t = me();
                    ke || 1 !== a || S >= ((null === t || void 0 === t ? void 0 : t.length) || 0) || (ee(!0),
                    D(xe),
                    ke = !0,
                    null === t || void 0 === t || t.forEach((function(e, t) {
                        e.classList.contains(Ae.a.textStrIsSelected) && e.classList.remove(Ae.a.textStrIsSelected),
                        t === S && (e.classList.add(Ae.a.textStrIsSelected),
                        e.classList.add(Ae.a.isPressed))
                    }
                    )))
                },
                END: function() {
                    if (1 === a) {
                        ke = !1;
                        var e = S + 1
                          , t = me();
                        return null === t || void 0 === t || t.forEach((function(t, a) {
                            t.classList.contains(Ae.a.textStrIsSelected) && (t.classList.remove(Ae.a.textStrIsSelected),
                            t.classList.remove(Ae.a.isPressed)),
                            a === e && (t.classList.add(Ae.a.textStrIsSelected),
                            ge()),
                            a === S && W([].concat(Object(te.a)(H), [{
                                begin: Object(ce.a)(R + 60 * (new Date).getTimezoneOffset() * 1e3, "HH:mm:ss.SSS"),
                                end: Object(ce.a)(xe + 60 * (new Date).getTimezoneOffset() * 1e3, "HH:mm:ss.SSS"),
                                text: t.innerHTML
                            }]))
                        }
                        )),
                        x(e),
                        e >= ((null === t || void 0 === t ? void 0 : t.length) || 0) ? (null === q || void 0 === q || q.pause(),
                        fe(!1),
                        void n(2)) : void 0
                    }
                },
                PREV_STR: function() {
                    if (!(1 !== a || S <= 0)) {
                        var e = S - 1;
                        x(e),
                        le || ee(!0),
                        H.pop(),
                        W(H);
                        var t = me();
                        null === t || void 0 === t || t.forEach((function(t, a) {
                            t.classList.contains(Ae.a.textStrIsSelected) && (t.classList.remove(Ae.a.textStrIsSelected),
                            t.classList.remove(Ae.a.isPressed)),
                            a === e && t.classList.add(Ae.a.textStrIsSelected)
                        }
                        ))
                    }
                }
            }
              , ge = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
                return oe()(".".concat(Ae.a.textStrIsSelected), {
                    duration: e,
                    offset: -window.innerHeight / 2
                })
            }
              , he = function(e) {
                e.preventDefault(),
                s.trim() && g.trim() && E && q ? n(1) : Q(!0)
            }
              , fe = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                x(0),
                ee(!1),
                xe = 0,
                null === q || void 0 === q || q.seekTo(0),
                e && W([]);
                var t = me();
                null === t || void 0 === t || t.forEach((function(e) {
                    e.classList.contains(Ae.a.textStrIsSelected) && (e.classList.remove(Ae.a.textStrIsSelected),
                    e.classList.remove(Ae.a.isPressed))
                }
                ))
            }
              , ve = function(e) {
                e.preventDefault(),
                fe()
            }
              , be = function(e) {
                e.preventDefault(),
                fe(),
                n(0)
            }
              , Ee = function() {
                Q(!1),
                X(!1)
            }
              , Ce = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = "karaoke";
                return E.trim() && g.trim() ? t = "".concat(g.trim(), "_").concat(E.trim()) : E.trim() ? t = E.trim() : g.trim() && (t = g.trim()),
                "".concat(de()(t, {
                    lower: !0,
                    replacement: "_"
                })).concat(e ? Object(ce.a)(new Date, "_HH.mm_dd.MM.yyyy") : "")
            };
            return l.a.createElement(re.GlobalHotKeys, {
                keyMap: {
                    START: {
                        sequence: "space",
                        action: "keydown"
                    },
                    END: {
                        sequence: "space",
                        action: "keyup"
                    },
                    PREV_STR: "backspace"
                },
                handlers: pe,
                allowChanges: !0
            }, l.a.createElement(we, {
                isOpen: Y,
                onClose: Ee
            }), l.a.createElement(je, {
                isOpen: V,
                onClose: Ee
            }), l.a.createElement("div", {
                style: {
                    color: Fe.palette.text.secondary
                }
            }, l.a.createElement("div", {
                className: Ae.a.levels,
                style: {
                    color: Fe.palette.text.primary
                }
            }, l.a.createElement(Oe, {
                value: a,
                index: 0,
                className: Ae.a.level
            }, l.a.createElement(w.a, {
                id: N.startMessage,
                values: {
                    a: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(_.a, {
                            key: t,
                            href: "#",
                            onClick: he,
                            underline: "always",
                            color: "primary"
                        }, t)
                    }
                }
            }), l.a.createElement("div", {
                className: Ae.a.divider
            }), l.a.createElement("div", {
                className: se()(Ae.a.playerResetContainer, Object(K.a)({}, Ae.a.isVisible, q))
            }, l.a.createElement(f.a, {
                className: Ae.a.playerReset,
                size: "small",
                onClick: function() {
                    $(null),
                    ie("")
                },
                color: "inherit",
                startIcon: l.a.createElement(A.a, {
                    path: O.i,
                    size: .6,
                    color: d.a.common.white
                })
            }, l.a.createElement(w.a, {
                id: N.playerReset
            })))), l.a.createElement(Oe, {
                value: a,
                index: 1,
                className: Ae.a.level
            }, l.a.createElement(w.a, {
                id: N.workMessage,
                values: {
                    reset: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(_.a, {
                            key: t,
                            href: "#",
                            onClick: ve,
                            underline: "always",
                            color: "primary"
                        }, t)
                    },
                    return: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement(_.a, {
                            key: t,
                            href: "#",
                            onClick: be,
                            underline: "always",
                            color: "primary"
                        }, t)
                    },
                    p: function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                            t[a] = arguments[a];
                        return l.a.createElement("div", {
                            key: t
                        }, t)
                    }
                }
            }), l.a.createElement("div", {
                className: Ae.a.divider
            }), l.a.createElement("div", {
                className: Ae.a.playerStatusContainer
            }, l.a.createElement("div", {
                className: se()(Ae.a.playerStatus, Object(K.a)({}, Ae.a.isRec, le))
            }, le ? l.a.createElement(l.a.Fragment, null, l.a.createElement(A.a, {
                path: O.h,
                size: .5,
                color: d.a.common.white
            }), l.a.createElement(w.a, {
                id: N.playerStatusPlaying
            })) : l.a.createElement(w.a, {
                id: N.playerStatusNoPlaying
            }))))), l.a.createElement(ye, {
                disabled: a > 1,
                onTogglePlaying: function() {
                    s.trim() && g.trim() && E && q ? (0 === a && n(1),
                    ee(!le)) : X(!0)
                }
            }), l.a.createElement(Oe, {
                value: a < 2 ? 0 : 3,
                index: 0,
                className: Ae.a.fields
            }, l.a.createElement("div", {
                className: Ae.a.meta
            }, l.a.createElement(ne.a, {
                disabled: !!a,
                placeholder: L.formatMessage({
                    id: N.inputPlaceholderAuthor
                }),
                variant: "outlined",
                InputProps: {
                    className: Ae.a.field
                },
                value: g,
                onChange: function(e) {
                    var t = e.target.value;
                    h(t)
                }
            }), l.a.createElement(ne.a, {
                disabled: !!a,
                placeholder: L.formatMessage({
                    id: N.inputPlaceholderTrackName
                }),
                variant: "outlined",
                InputProps: {
                    className: Ae.a.field
                },
                value: E,
                onChange: function(e) {
                    var t = e.target.value;
                    j(t)
                }
            })), !a && l.a.createElement(ne.a, {
                disabled: !!a,
                placeholder: L.formatMessage({
                    id: N.inputPlaceholderText
                }),
                fullWidth: !0,
                multiline: !0,
                variant: "outlined",
                InputProps: {
                    className: Ae.a.areaField
                },
                className: Ae.a.area,
                value: s,
                rows: ue < 4 ? 4 : ue,
                onChange: function(e) {
                    var t = e.target.value;
                    c(t)
                }
            }), !!a && l.a.createElement(v.a, {
                ref: k,
                className: Ae.a.text,
                dangerouslySetInnerHTML: {
                    __html: s.replace(/^/gm, '<div class="' + Ae.a.textStr + '">').replace(/$/gm, "</div><br />").replace(/<div.*?><\/div><br \/>/g, "<div>&nbsp;</div>")
                }
            })), l.a.createElement(Oe, {
                index: 2,
                value: a,
                className: Ae.a.success
            }, l.a.createElement("div", null, l.a.createElement(A.a, {
                path: O.a,
                size: 3,
                color: d.a.green[500]
            })), l.a.createElement("div", {
                className: Ae.a.message
            }, l.a.createElement("div", null, l.a.createElement(f.a, {
                component: "a",
                className: Ae.a.download,
                download: Ce() + ".ttml",
                href: H.length ? URL.createObjectURL(new Blob([Se({
                    title: E.trim() || Ce(!1),
                    name: g.trim(),
                    items: H
                })])) : ""
            }, l.a.createElement(A.a, {
                path: O.c,
                size: 1,
                className: Ae.a.icon,
                color: Fe.palette.error.main
            }), l.a.createElement(w.a, {
                id: N.successDownloadTTMLFile
            }))), l.a.createElement("div", {
                className: Ae.a.link,
                onClick: function() {
                    n(1),
                    fe()
                }
            }, l.a.createElement(f.a, {
                color: "primary"
            }, l.a.createElement(w.a, {
                id: N.successResetThisTrackLink
            }))), l.a.createElement("div", {
                className: Ae.a.link,
                onClick: function() {
                    n(0),
                    fe(),
                    c(""),
                    h(""),
                    j(""),
                    $(null),
                    ie("")
                }
            }, l.a.createElement(f.a, {
                color: "primary"
            }, l.a.createElement(w.a, {
                id: N.successResetAppLink
            })))))))
        }
          , Me = {
            ru: $,
            en: ee
        };
        var Te = function() {
            var e = T().language;
            return l.a.createElement(m.a, {
                locale: e.toLowerCase(),
                messages: Me[e.toLowerCase()]
            }, l.a.createElement(q, null), l.a.createElement(Le, null))
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var Fe = Object(c.a)({
            palette: {
                primary: {
                    main: "#cc0f8d"
                },
                secondary: {
                    main: "#343A40"
                },
                error: d.a.deepOrange,
                text: {
                    primary: d.a.grey[700],
                    secondary: d.a.grey[600],
                    disabled: d.a.grey[400]
                }
            },
            overrides: {
                MuiToolbar: {
                    regular: {
                        "@media (min-width: 600px)": {
                            minHeight: 58
                        }
                    },
                    gutters: {
                        "@media (min-width: 600px)": {
                            paddingLeft: "1rem",
                            paddingRight: "1rem"
                        }
                    }
                },
                MuiTextField: {
                    root: {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ccc !important",
                            transition: ".2s !important"
                        },
                        "& :focus + .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(204, 15, 141, 0.3) !important"
                        }
                    }
                }
            }
        });
        i.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(s.a, null), l.a.createElement(u.a, {
            theme: Fe
        }, l.a.createElement(M, null, l.a.createElement(Te, null)))), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    },
    7: function(e, t, a) {
        e.exports = {
            levels: "AppContent_levels__1qutI",
            level: "AppContent_level__2n2EA",
            divider: "AppContent_divider__rMeYD",
            fields: "AppContent_fields__2VLYy",
            meta: "AppContent_meta__16H3x",
            field: "AppContent_field__yq76b",
            area: "AppContent_area__6Vf0F",
            areaField: "AppContent_areaField__2MDMF",
            text: "AppContent_text__2ig0O",
            textStr: "AppContent_textStr__1UykT",
            textStrIsSelected: "AppContent_textStrIsSelected__QpIb3",
            isPressed: "AppContent_isPressed__1ev-c",
            playerResetContainer: "AppContent_playerResetContainer__EoMZ3",
            isVisible: "AppContent_isVisible___lgqV",
            playerReset: "AppContent_playerReset__1X6ic",
            playerStatusContainer: "AppContent_playerStatusContainer__3vKRd",
            playerStatus: "AppContent_playerStatus__1WvoJ",
            isRec: "AppContent_isRec__1VZHX",
            success: "AppContent_success__1SR1g",
            message: "AppContent_message__2-1mM",
            icon: "AppContent_icon__2Nnvx",
            link: "AppContent_link__15vDr"
        }
    },
    71: function(e, t, a) {
        e.exports = {
            appBar: "AppHeader_appBar__gzgTI",
            logo: "AppHeader_logo__2rEis",
            button: "AppHeader_button__1lzv1",
            select: "AppHeader_select__L2r9i"
        }
    }
}, [[242, 1, 2]]]);
//# sourceMappingURL=main.9f0a2e14.chunk.js.map
