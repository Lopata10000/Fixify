(function () {
    "use strict";
    var e = {
        6999: function (e, t, a) {
            var n = a(3751), o = a(641);
            const s = {id: "app"};

            function r(e, t) {
                const a = (0, o.g2)("router-view");
                return (0, o.uX)(), (0, o.CE)("div", s, [(0, o.bF)(a)])
            }

            var i = a(6262);
            const l = {}, c = (0, i.A)(l, [["render", r], ["__scopeId", "data-v-76a23f1f"]]);
            var d = c, u = a(5220);
            const m = {id: "app"}, p = {class: "page-wrapper"};

            function f(e, t, a, n, s, r) {
                const i = (0, o.g2)("NavBar"), l = (0, o.g2)("ServiceSearch"), c = (0, o.g2)("ReviewsSection"),
                    d = (0, o.g2)("AppFooter");
                return (0, o.uX)(), (0, o.CE)("div", m, [(0, o.bF)(i), (0, o.Lk)("div", p, [(0, o.bF)(l), (0, o.bF)(c)]), (0, o.bF)(d)])
            }

            const v = e => ((0, o.Qi)("data-v-393b9e2e"), e = e(), (0, o.jt)(), e), h = {class: "nav-bar w-nav"},
                b = {class: "nav-container w-container"},
                k = v((() => (0, o.Lk)("div", {class: "logo-div"}, [(0, o.Lk)("a", {
                    href: "/",
                    class: "nav-logo w-inline-block w--current"
                }, [(0, o.Lk)("img", {
                    src: "/image/logo-long.png",
                    width: "250",
                    height: "auto",
                    alt: "",
                    class: "logo"
                })])], -1))), g = {role: "navigation", class: "nav-content w-nav-menu"},
                w = v((() => (0, o.Lk)("div", {class: "search-banner"}, [(0, o.Lk)("div", {class: "search-section"})], -1))),
                y = {key: 0, class: "nav-cta-button-container"}, L = v((() => (0, o.Lk)("a", {
                    href: "/admin-panel",
                    class: "nav-link cta-button w-nav-link"
                }, "Адмін панель", -1))), x = [L], C = {key: 1, class: "nav-cta-button-container"},
                E = v((() => (0, o.Lk)("a", {
                    href: "/dashboard",
                    class: "nav-link cta-button w-nav-link"
                }, "Мої послуги", -1))), F = [E], _ = {key: 2, class: "nav-link"},
                A = v((() => (0, o.Lk)("a", {href: "/log-in", class: "nav-link cta-button w-nav-link"}, "Увійти", -1))),
                D = [A], S = {key: 3, class: "nav-cta-button-container"}, j = v((() => (0, o.Lk)("a", {
                    href: "/sign-up",
                    class: "nav-link cta-button w-nav-link"
                }, "Реєстрація", -1))), I = [j], T = {key: 4, class: "nav-link"},
                N = v((() => (0, o.Lk)("div", {class: "menu-button w-nav-button"}, [(0, o.Lk)("img", {
                    src: "/image/logo-long.png",
                    width: "24",
                    alt: "",
                    class: "menu-icon"
                })], -1)));

            function B(e, t, a, n, s, r) {
                return (0, o.uX)(), (0, o.CE)("div", h, [(0, o.Lk)("div", b, [k, (0, o.Lk)("nav", g, [w, "ADMIN" === e.authority ? ((0, o.uX)(), (0, o.CE)("div", y, x)) : (0, o.Q3)("", !0), "USER" === e.authority || "MANAGER" === e.authority ? ((0, o.uX)(), (0, o.CE)("div", C, F)) : (0, o.Q3)("", !0), "NONE" === e.authority ? ((0, o.uX)(), (0, o.CE)("div", _, D)) : (0, o.Q3)("", !0), "NONE" === e.authority ? ((0, o.uX)(), (0, o.CE)("div", S, I)) : (0, o.Q3)("", !0), "USER" === e.authority || "MANAGER" === e.authority || "ADMIN" === e.authority ? ((0, o.uX)(), (0, o.CE)("div", T, [(0, o.Lk)("a", {
                    onClick: t[0] || (t[0] = (...t) => e.logout && e.logout(...t)),
                    class: "nav-link cta-button w-nav-link"
                }, "Вийти")])) : (0, o.Q3)("", !0)]), N])])
            }

            var O = a(953), R = a(4335);
            const $ = window.localStorage.getItem("refreshToken");
            R.A.defaults.headers.common["Authorization"] = `Bearer ${$}`;
            var X = R.A, M = {
                name: "NavBar", setup: function () {
                    const e = (0, O.KR)(null), t = () => {
                        X.get("/v1/get-authority").then((t => {
                            e.value = t.data
                        })).catch((t => {
                            t.response && t.response.status, e.value = "NONE"
                        }))
                    }, a = () => {
                        X.get("/v1/logout").then((() => {
                            e.value = "NONE", window.location.href = "/home"
                        })).catch((e => {
                            console.error(e)
                        }))
                    };
                    return (0, o.sV)((() => {
                        t()
                    })), {authority: e, logout: a}
                }
            };
            const P = (0, i.A)(M, [["render", B], ["__scopeId", "data-v-393b9e2e"]]);
            var U = P, q = a(33);
            const V = e => ((0, o.Qi)("data-v-3ef0bae8"), e = e(), (0, o.jt)(), e),
                K = {class: "section black-gradient"}, Q = {class: "container-6 w-container"},
                J = {class: "text-box _550px center-align"},
                z = V((() => (0, o.Lk)("h2", {class: "heading h2"}, "Онлайн-сервіс замовлення послуг", -1))),
                H = V((() => (0, o.Lk)("p", {class: "paragraph-3 large"}, "Уведіть назву послуги", -1))),
                W = V((() => (0, o.Lk)("div", {class: "spacer-2 _16"}, null, -1))),
                G = {class: "email-form center-align w-form"}, Y = {class: "email-subscribe"},
                Z = V((() => (0, o.Lk)("input", {
                    type: "submit",
                    class: "button w-button dark",
                    value: "Пошук"
                }, null, -1))), ee = {key: 0, class: "form-success-2 dark w-form-done"},
                te = {key: 1, class: "w-form-fail"};

            function ae(e, t, a, s, r, i) {
                return (0, o.uX)(), (0, o.CE)("div", K, [(0, o.Lk)("div", Q, [(0, o.Lk)("div", J, [z, H, W, (0, o.Lk)("div", G, [(0, o.Lk)("form", {
                    onSubmit: t[1] || (t[1] = (0, n.D$)(((...e) => i.searchService && i.searchService(...e)), ["prevent"])),
                    id: "wf-form-Subscribe-Form",
                    name: "wf-form-Subscribe-Form",
                    class: "email-form"
                }, [(0, o.Lk)("div", Y, [(0, o.bo)((0, o.Lk)("input", {
                    class: "text-field",
                    "onUpdate:modelValue": t[0] || (t[0] = e => r.query = e),
                    placeholder: "Приклад: ремонт холодильника",
                    required: ""
                }, null, 512), [[n.Jo, r.query]]), Z])], 32), r.successMessage ? ((0, o.uX)(), (0, o.CE)("div", ee, [(0, o.Lk)("div", null, (0, q.v_)(r.successMessage), 1)])) : (0, o.Q3)("", !0), r.errorMessage ? ((0, o.uX)(), (0, o.CE)("div", te, [(0, o.Lk)("div", null, (0, q.v_)(r.errorMessage), 1)])) : (0, o.Q3)("", !0)])])])])
            }

            var ne = {
                name: "ServiceSearch", data() {
                    return {query: "", successMessage: "", errorMessage: ""}
                }, methods: {
                    searchService() {
                        window.location.href = "/new-task"
                    }
                }
            };
            const oe = (0, i.A)(ne, [["render", ae], ["__scopeId", "data-v-3ef0bae8"]]);
            var se = oe, re = a.p + "img/more.51aa0dd4.png";
            const ie = e => ((0, o.Qi)("data-v-c5722d5a"), e = e(), (0, o.jt)(), e), le = {class: "section"},
                ce = {class: "container"},
                de = ie((() => (0, o.Lk)("div", {class: "section-top"}, [(0, o.Lk)("h2", {class: "heading h3"}, "Топ відгуки"), (0, o.Lk)("a", {
                    href: "/log-in",
                    class: "button light mobile-hidden w-button"
                }, "Додати відгук")], -1))), ue = {class: "w-dyn-lists w-1"},
                me = {role: "list", class: "large-3-grid w-dyn-items"}, pe = ["href"], fe = ie((() => (0, o.Lk)("img", {
                    alt: "Event Cover",
                    height: "150",
                    src: "/image/img.png",
                    width: "150"
                }, null, -1))), ve = [fe], he = ["href"], be = {class: "heading h4"}, ke = {class: "paragraph small"},
                ge = {class: "paragraph small"}, we = {class: "content-center"};

            function ye(e, t, a, n, s, r) {
                const i = (0, o.g2)("star-rating");
                return (0, o.uX)(), (0, o.CE)("div", le, [(0, o.Lk)("div", ce, [de, (0, o.Lk)("div", ue, [(0, o.Lk)("div", me, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(s.displayedReviews, (e => ((0, o.uX)(), (0, o.CE)("div", {
                    key: e.id,
                    class: (0, q.C4)(["ebook-box w-dyn-item card", {"animate__animated animate__slideInUp": e.newlyAdded}])
                }, [(0, o.Lk)("a", {
                    href: "/reviews/" + e.id,
                    class: "ebook-thumbnail w-inline-block no-underline"
                }, ve, 8, pe), (0, o.Lk)("a", {
                    href: "/event/" + e.id,
                    class: "card-text-link w-inline-block no-underline"
                }, [(0, o.Lk)("h2", be, (0, q.v_)(r.getShortenedText(e.comment)), 1), (0, o.Lk)("div", ke, [(0, o.bF)(i, {
                    rating: e.rating,
                    increment: .5,
                    "read-only": !0,
                    "star-size": 20,
                    "active-color": "#FFD700",
                    "inactive-color": "#C0C0C0",
                    "show-rating": !1
                }, null, 8, ["rating"])]), (0, o.Lk)("p", ge, "Дата: " + (0, q.v_)(e.datePosted), 1)], 8, he)], 2)))), 128))])]), (0, o.Lk)("div", we, [s.allReviewsLoaded ? (0, o.Q3)("", !0) : ((0, o.uX)(), (0, o.CE)("img", {
                    key: 0,
                    src: re,
                    class: "h-20",
                    onClick: t[0] || (t[0] = (...e) => r.animateLoadMore && r.animateLoadMore(...e)),
                    ref: "loadMoreImg"
                }, null, 512))])])])
            }

            a(4114);
            var Le = a(4513), xe = a.n(Le), Ce = {
                components: {StarRating: xe()}, data() {
                    return {
                        reviews: [],
                        displayedReviews: [],
                        batchSize: 6,
                        loadedReviewsCount: 0,
                        allReviewsLoaded: !1
                    }
                }, methods: {
                    async fetchEvents() {
                        const e = await R.A.get("/api/reviews/all");
                        this.reviews = e.data.map((e => {
                            const t = new Date(e.datePosted).toISOString().slice(0, 19).replace("T", " ");
                            return {...e, datePosted: t}
                        })).sort(((e, t) => new Date(t.datePosted) - new Date(e.datePosted))), this.loadMore()
                    }, getShortenedText(e) {
                        const t = 56;
                        return e.length > t ? e.slice(0, t) + " (...)" : e
                    }, animateLoadMore() {
                        this.$refs.loadMoreImg.classList.add("animate__animated", "animate__rotateIn"), setTimeout((() => {
                            this.$refs.loadMoreImg.classList.remove("animate__animated", "animate__rotateIn"), this.loadMore()
                        }), 700)
                    }, loadMore() {
                        const e = this.loadedReviewsCount, t = e + this.batchSize;
                        t >= this.reviews.length && (this.allReviewsLoaded = !0);
                        const a = this.reviews.slice(e, t);
                        let n = 0;
                        a.forEach((e => {
                            setTimeout((() => {
                                e.newlyAdded = !0, this.displayedReviews.push(e)
                            }), n), n += 200
                        })), this.loadedReviewsCount += this.batchSize
                    }, register() {
                        window.location.href = "/html/access-denied.html"
                    }
                }, mounted() {
                    this.fetchEvents()
                }
            };
            const Ee = (0, i.A)(Ce, [["render", ye], ["__scopeId", "data-v-c5722d5a"]]);
            var Fe = Ee;
            const _e = {class: "footer"},
                Ae = (0, o.Fv)('<div class="footer-container w-container" data-v-860fa810><div class="w-layout-grid footer-grid" data-v-860fa810><div class="footer-logo-block" data-v-860fa810><a href="/" class="footer-logo w-nav-brand w--current" data-v-860fa810><img src="/image/logo-long.png" width="363" alt="" data-v-860fa810></a><p class="paragraph small" data-v-860fa810>Зробив Фанта Петро</p><div class="spacer _16" data-v-860fa810></div><div class="paragraph small" data-v-860fa810>© 2024 Fixify.<br data-v-860fa810>Всі права захищені.</div></div><div class="footer-links-container" data-v-860fa810><h5 class="footer-header" data-v-860fa810>Website</h5><a href="/" class="footer-link w--current" data-v-860fa810>Home</a><a href="/html/resources.html" class="footer-link" data-v-860fa810>Resources</a><a href="/contact" class="footer-link" data-v-860fa810>Contact</a><a href="/html/privacy-policy.html" class="footer-link" data-v-860fa810>Privacy Policy</a></div><div class="footer-links-container" data-v-860fa810><h5 class="footer-header" data-v-860fa810>fixify</h5><a href="/html/log-in.html" class="footer-link" data-v-860fa810>Sign In</a><a href="/html/sign-up.html" class="footer-link" data-v-860fa810>Sign Up</a><a href="/html/user-account.html" class="footer-link" data-v-860fa810>User Account</a><a href="/reset-password" class="footer-link" data-v-860fa810>Reset Password </a></div></div></div>', 1),
                De = [Ae];

            function Se(e, t, a, n, s, r) {
                return (0, o.uX)(), (0, o.CE)("div", _e, De)
            }

            var je = {name: "AppFooter"};
            const Ie = (0, i.A)(je, [["render", Se], ["__scopeId", "data-v-860fa810"]]);
            var Te = Ie, Ne = {components: {NavBar: U, ServiceSearch: se, ReviewsSection: Fe, AppFooter: Te}};
            const Be = (0, i.A)(Ne, [["render", f]]);
            var Oe = Be;
            const Re = e => ((0, o.Qi)("data-v-2527c49a"), e = e(), (0, o.jt)(), e),
                $e = {class: "w-users-userformpagewrap full-page-wrapper"},
                Xe = {class: "w-users-usersignupformwrapper admin-form-card"}, Me = {key: 0, id: "buttons-wrapper"},
                Pe = Re((() => (0, o.Lk)("img", {
                    src: "/image/logo-long.png",
                    loading: "lazy",
                    alt: "",
                    width: "300"
                }, null, -1))),
                Ue = Re((() => (0, o.Lk)("p", {align: "center", class: "paragraph large"}, "Хто ти? ", -1))),
                qe = {class: "center"}, Ve = Re((() => (0, o.Lk)("img", {
                    src: "/image/logo-long.png",
                    loading: "lazy",
                    alt: "",
                    width: "300"
                }, null, -1))),
                Ke = Re((() => (0, o.Lk)("div", {class: "w-users-userformheader form-card-header"}, [(0, o.Lk)("h2", {class: "heading h3"}, "Реєстрація")], -1))),
                Qe = Re((() => (0, o.Lk)("option", {value: "", selected: "", disabled: ""}, "Оберіть ваше місто", -1))),
                Je = ["value"], ze = {class: "w-checkbox checkbox-field"},
                He = Re((() => (0, o.Lk)("span", {class: "checkbox-label w-form-label"}, "Я згоден з політикою конфіденційності", -1))),
                We = Re((() => (0, o.Lk)("input", {
                    class: "w-users-userformbutton button w-button",
                    type: "submit",
                    value: "Реєстрація"
                }, null, -1))), Ge = {class: "w-users-userformfooter form-card-footer"},
                Ye = Re((() => (0, o.Lk)("span", null, "Уже маєте аккаунт", -1))), Ze = Re((() => (0, o.Lk)("div", {
                    class: "w-users-usersignupverificationmessage verification-box w-form-verification",
                    "data-wf-user-form-verification": "true",
                    tabindex: "-1"
                }, [(0, o.Lk)("div", {class: "w-users-userformheader"}, [(0, o.Lk)("img", {
                    alt: "",
                    class: "icon",
                    src: "https://assets-global.website-files.com/6610606930da13b8a528a088/6610606a30da13b8a528a16d_Email%20Sent%20Icon.svg"
                }), (0, o.Lk)("h2", null, "Verification Required")]), (0, o.Lk)("p", null, "Account verification required. Please check your email to find your unique verification link.")], -1))),
                et = {key: 0, id: "error-message"};

            function tt(e, t, a, s, r, i) {
                const l = (0, o.g2)("router-link");
                return (0, o.uX)(), (0, o.CE)("div", $e, [(0, o.Lk)("div", Xe, [r.isFormVisible ? (0, o.Q3)("", !0) : ((0, o.uX)(), (0, o.CE)("div", Me, [Pe, Ue, (0, o.Lk)("div", qe, [(0, o.Lk)("button", {
                    class: "button",
                    onClick: t[0] || (t[0] = e => i.showRegistrationFields("USER"))
                }, "Замовник"), (0, o.Lk)("button", {
                    class: "button w-button",
                    onClick: t[1] || (t[1] = e => i.showRegistrationFields("MANAGER"))
                }, "Фахівець")])])), r.isFormVisible ? ((0, o.uX)(), (0, o.CE)("form", {
                    key: 1,
                    ref: "form",
                    id: "user-form",
                    onSubmit: t[8] || (t[8] = (0, n.D$)(((...e) => i.submitForm && i.submitForm(...e)), ["prevent"]))
                }, [Ve, Ke, (0, o.bo)((0, o.Lk)("input", {
                    id: "fullName",
                    class: "text-field w-input",
                    "onUpdate:modelValue": t[2] || (t[2] = e => r.fullName = e),
                    maxlength: "256",
                    name: "fullName",
                    pattern: "[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\\s']{3,}",
                    placeholder: "Ваше повне ім'я",
                    required: "",
                    title: "Будь ласка, введіть тільки літери і більше за 2 символи.",
                    type: "text"
                }, null, 512), [[n.Jo, r.fullName]]), (0, o.bo)((0, o.Lk)("select", {
                    id: "address",
                    "onUpdate:modelValue": t[3] || (t[3] = e => r.address = e),
                    name: "address",
                    required: "",
                    "data-name": "Category 2",
                    class: "form-dropdown w-select"
                }, [Qe, ((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(r.towns, (e => ((0, o.uX)(), (0, o.CE)("option", {
                    key: e.id,
                    value: e.town_name
                }, (0, q.v_)(e.town_name), 9, Je)))), 128))], 512), [[n.u1, r.address]]), (0, o.bo)((0, o.Lk)("input", {
                    id: "phoneNumber",
                    class: "text-field w-input",
                    "onUpdate:modelValue": t[4] || (t[4] = e => r.phoneNumber = e),
                    style: {width: "300px"},
                    maxlength: "10",
                    name: "phoneNumber",
                    "data-orig-size": "10",
                    required: "",
                    placeholder: "Ваш номер телефону",
                    type: "tel"
                }, null, 512), [[n.Jo, r.phoneNumber]]), (0, o.bo)((0, o.Lk)("input", {
                    id: "email",
                    autoComplete: "email",
                    class: "text-field w-input",
                    style: {"margin-top": "19px"},
                    "onUpdate:modelValue": t[5] || (t[5] = e => r.email = e),
                    maxlength: "256",
                    name: "email",
                    placeholder: "Ваша електронна адреса",
                    required: "",
                    type: "email"
                }, null, 512), [[n.Jo, r.email]]), (0, o.bo)((0, o.Lk)("input", {
                    id: "wf-sign-up-password",
                    class: "text-field w-input",
                    "onUpdate:modelValue": t[6] || (t[6] = e => r.password = e),
                    maxlength: "256",
                    minlength: "8",
                    name: "password",
                    placeholder: "Ваш пароль",
                    required: "",
                    type: "password"
                }, null, 512), [[n.Jo, r.password]]), (0, o.Lk)("label", ze, [(0, o.bo)((0, o.Lk)("input", {
                    id: "wf-sign-up-accept-privacy",
                    class: "w-checkbox-input check-box",
                    "onUpdate:modelValue": t[7] || (t[7] = t => e.acceptPrivacy = t),
                    "data-name": "Checkbox",
                    "data-wf-user-field": "wf-user-field-accept-privacy",
                    name: "Checkbox",
                    required: "",
                    type: "checkbox"
                }, null, 512), [[n.lH, e.acceptPrivacy]]), He]), We, (0, o.Lk)("div", Ge, [Ye, (0, o.bF)(l, {to: "/log-in"}, {
                    default: (0, o.k6)((() => [(0, o.eW)("Увійти")])),
                    _: 1
                })])], 544)) : (0, o.Q3)("", !0), Ze]), r.errorMessage ? ((0, o.uX)(), (0, o.CE)("div", et, (0, q.v_)(r.errorMessage), 1)) : (0, o.Q3)("", !0)])
            }

            var at = a(8465), nt = a.n(at), ot = a(436), st = a.n(ot), rt = {
                data() {
                    return {
                        fullName: "",
                        address: "",
                        phoneNumber: "",
                        email: "",
                        password: "",
                        role: "",
                        towns: [],
                        errorMessage: "",
                        isFormVisible: !1,
                        formHeader: "Реєстрація"
                    }
                }, mounted() {
                    this.fetchTowns()
                }, methods: {
                    async fetchTowns() {
                        try {
                            const e = await fetch("/api/towns/all");
                            if (!e.ok) throw new Error("Network response was not ok");
                            const t = await e.json();
                            this.towns = t
                        } catch (e) {
                            console.error("Error fetching towns:", e)
                        }
                    }, initPhoneNumberInput() {
                        const e = document.querySelector("#phoneNumber");
                        st()(e, {
                            separateDialCode: !0,
                            autoPlaceholder: "polite",
                            formatOnDisplay: !0,
                            nationalMode: !1,
                            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
                        }), e.addEventListener("input", (() => {
                            e.value = e.value.replace(/[^0-9]/g, "");
                            const t = parseInt(e.getAttribute("data-orig-size"), 10);
                            e.value.length > t && (e.value = e.value.slice(0, t))
                        }))
                    }, showRegistrationFields(e) {
                        this.role = e, this.isFormVisible = !0, this.$nextTick((() => {
                            this.initPhoneNumberInput()
                        })), "USER" === e ? this.formHeader = "Реєстрація як замовник" : "MANAGER" === e && (this.formHeader = "Реєстрація як фахівець")
                    }, async submitForm() {
                        const e = new FormData;
                        e.append("fullName", this.fullName), e.append("address", this.address), e.append("phoneNumber", this.phoneNumber), e.append("email", this.email), e.append("password", this.password), e.append("role", this.role);
                        try {
                            const t = await fetch("/api/user/new", {
                                method: "POST",
                                body: JSON.stringify(Object.fromEntries(e)),
                                headers: {"Content-Type": "application/json"}
                            });
                            if (!t.ok) throw new Error("Network response was not ok");
                            const a = await t.json(), n = a.refresh_token;
                            localStorage.setItem("refreshToken", n), nt().fire({
                                title: "Успішна реєстрація.",
                                icon: "success",
                                confirmButtonText: "OK"
                            }).then((e => {
                                e.isConfirmed && (window.location.href = "/new-task")
                            }))
                        } catch (t) {
                            await nt().fire({
                                title: "Така електронна адреса уже використовується.",
                                icon: "error",
                                confirmButtonText: "OK"
                            })
                        }
                    }
                }
            };
            const it = (0, i.A)(rt, [["render", tt], ["__scopeId", "data-v-2527c49a"]]);
            var lt = it;
            const ct = {class: "w-users-userformpagewrap full-page-wrapper"},
                dt = {class: "w-users-userloginformwrapper admin-form-card"},
                ut = (0, o.Lk)("img", {src: "/image/logo-long.png", loading: "lazy", alt: "", width: "300"}, null, -1),
                mt = (0, o.Lk)("div", {class: "w-users-userformheader form-card-header"}, [(0, o.Lk)("h2", {class: "heading h3"}, "Вхід"), (0, o.Lk)("p", {class: "paragraph small"}, "Заповніть свої дані нижче")], -1),
                pt = (0, o.Lk)("input", {
                    type: "submit",
                    value: "Увійти",
                    class: "w-users-userformbutton button w-button"
                }, null, -1), ft = {class: "w-users-userformfooter form-card-footer"},
                vt = (0, o.Lk)("span", null, "Немає акаунту?", -1),
                ht = (0, o.Lk)("div", {id: "error-message", style: {display: "none"}}, null, -1),
                bt = (0, o.Lk)("a", {href: "/html/reset-password.html", class: "below-card-link"}, "Забув пароль?", -1);

            function kt(e, t, a, s, r, i) {
                const l = (0, o.g2)("router-link");
                return (0, o.uX)(), (0, o.CE)("div", ct, [(0, o.Lk)("div", dt, [ut, (0, o.Lk)("form", {onSubmit: t[2] || (t[2] = (0, n.D$)(((...e) => i.submitForm && i.submitForm(...e)), ["prevent"]))}, [mt, (0, o.bo)((0, o.Lk)("input", {
                    "onUpdate:modelValue": t[0] || (t[0] = e => r.email = e),
                    maxlength: "256",
                    placeholder: "Ваша електронна адреса",
                    name: "email",
                    id: "email",
                    class: "text-field w-input",
                    type: "email",
                    required: "",
                    autocomplete: "email"
                }, null, 512), [[n.Jo, r.email]]), (0, o.bo)((0, o.Lk)("input", {
                    "onUpdate:modelValue": t[1] || (t[1] = e => r.password = e),
                    maxlength: "256",
                    placeholder: "Ваш пароль",
                    name: "password",
                    id: "password",
                    class: "text-field w-input",
                    type: "password",
                    required: ""
                }, null, 512), [[n.Jo, r.password]]), pt, (0, o.Lk)("div", ft, [vt, (0, o.bF)(l, {to: "/sign-up"}, {
                    default: (0, o.k6)((() => [(0, o.eW)("Зареєструватися")])),
                    _: 1
                })])], 32), ht]), bt])
            }

            var gt = {
                data() {
                    return {email: "", password: ""}
                }, methods: {
                    async submitForm() {
                        try {
                            const e = new FormData;
                            e.append("email", this.email), e.append("password", this.password);
                            const t = await fetch("/api/user/authentication", {
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(Object.fromEntries(e))
                            }), a = await t.json();
                            if (t.ok) {
                                const e = a.refresh_token;
                                localStorage.setItem("refreshToken", e), await nt().fire({
                                    title: "Успішна авторизація.",
                                    icon: "success",
                                    confirmButtonText: "OK"
                                }), window.location.href = "/new-task"
                            } else await nt().fire({
                                title: "Невірний логін або пароль",
                                icon: "error",
                                confirmButtonText: "OK"
                            }), this.showError(a)
                        } catch (e) {
                            console.error("Помилка:", e)
                        }
                    }, showError(e) {
                        const t = "object" === typeof e ? e.message : e;
                        this.$refs.errorMessage.innerText = t, this.$refs.errorMessage.style.display = "block", setTimeout((() => {
                            this.$refs.errorMessage.style.display = "none"
                        }), 5e3)
                    }
                }, showError(e) {
                    if ("string" === typeof e && e.startsWith("{")) {
                        const t = JSON.parse(e), a = t.message;
                        document.getElementById("error-message").innerText = a
                    } else document.getElementById("error-message").innerText = e;
                    document.getElementById("error-message").style.display = "block", setTimeout((() => {
                        document.getElementById("error-message").style.display = "none"
                    }), 5e3)
                }
            };
            const wt = (0, i.A)(gt, [["render", kt]]);
            var yt = wt;
            const Lt = {class: "absolute inset-0 overflow-y-auto bg-black bg-opacity-50"},
                xt = {class: "flex items-start justify-center min-h-screen mt-24 text-center"}, Ct = {
                    class: "bg-white text-black rounded-lg text-center shadow-xl p-6 w-64",
                    role: "dialog",
                    "aria-modal": "true"
                }, Et = (0, o.Lk)("h3", null, "Do you confirm?", -1), Ft = {class: "flex justify-center py-4 text-white"};

            function _t(e, t) {
                const a = (0, o.g2)("star-rating");
                return (0, o.uX)(), (0, o.CE)("div", Lt, [(0, o.Lk)("div", xt, [(0, o.Lk)("div", Ct, [Et, (0, o.bF)(a, {
                    rating: 3.5,
                    increment: .5,
                    "read-only": !0,
                    "star-size": 20,
                    "active-color": "#FFD700",
                    "inactive-color": "#C0C0C0"
                }), (0, o.Lk)("div", Ft, [(0, o.Lk)("button", {
                    onClick: t[0] || (t[0] = t => e.$emit("close")),
                    class: "border border-black bg-white text-black mr-4"
                }, "No"), (0, o.Lk)("button", {onClick: t[1] || (t[1] = t => e.$emit("close"))}, "Yes")])])])])
            }

            const At = {}, Dt = (0, i.A)(At, [["render", _t]]);
            var St = Dt;
            const jt = {id: "app"};

            function It(e, t, a, n, s, r) {
                const i = (0, o.g2)("NavBar"), l = (0, o.g2)("AdminActions"), c = (0, o.g2)("AppFooter");
                return (0, o.uX)(), (0, o.CE)("div", jt, [(0, o.bF)(i), (0, o.bF)(l), (0, o.bF)(c)])
            }

            const Tt = e => ((0, o.Qi)("data-v-528b4bcc"), e = e(), (0, o.jt)(), e),
                Nt = Tt((() => (0, o.Lk)("div", {class: "section black-gradient"}, [(0, o.Lk)("div", {class: "content-center"}, [(0, o.Lk)("h4", {class: "heading-9"}, "Панель керування адміністратора")])], -1))),
                Bt = {class: "section light-grey"}, Ot = {class: "container"}, Rt = {class: "terms-card"},
                $t = {class: "content-center"},
                Xt = {class: "nav nav-tabs position-relative", id: "tables", role: "tablist"},
                Mt = {class: "nav-item", role: "presentation"}, Pt = {class: "nav-item", role: "presentation"},
                Ut = {class: "nav-item", role: "presentation"}, qt = {class: "nav-item", role: "presentation"},
                Vt = {class: "nav-item", role: "presentation"}, Kt = {class: "nav-item", role: "presentation"},
                Qt = {class: "w-row"},
                Jt = Tt((() => (0, o.Lk)("div", {class: "w-col w-col-6 w-3/5"}, [(0, o.Lk)("div", {
                    id: "tableContainer",
                    class: "overflow-x-auto"
                }), (0, o.Lk)("table", {
                    id: "adminTable",
                    class: "table-auto w-full border-collapse border border-gray-300 rounded-lg"
                }, [(0, o.Lk)("thead", {class: "bg-blue-200"}, [(0, o.Lk)("tr")]), (0, o.Lk)("tbody", null, [(0, o.Lk)("tr")])])], -1))),
                zt = {class: "content-center"},
                Ht = Tt((() => (0, o.Lk)("div", {class: "create-form", id: "createFormContainer"}, null, -1))),
                Wt = {key: 0, class: "modal", tabindex: "-1", role: "dialog"}, Gt = Tt((() => (0, o.Lk)("div", {
                    class: "modal-dialog",
                    role: "document"
                }, [(0, o.Lk)("div", {class: "modal-content"}, [(0, o.Lk)("div", {class: "modal-header"}, [(0, o.Lk)("h5", {class: "modal-title"}, "Модальне вікно"), (0, o.Lk)("button", {
                    type: "button",
                    class: "close",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                }, [(0, o.Lk)("span", {"aria-hidden": "true"}, "×")])]), (0, o.Lk)("div", {class: "modal-body"}, [(0, o.Lk)("p", null, "Цей текст буде відображатися у модальному вікні.")]), (0, o.Lk)("div", {class: "modal-footer"}, [(0, o.Lk)("button", {
                    type: "button",
                    class: "btn btn-secondary",
                    "data-dismiss": "modal"
                }, "Закрити"), (0, o.Lk)("button", {
                    type: "button",
                    class: "btn btn-primary"
                }, "Зберегти зміни")])])], -1))), Yt = [Gt];

            function Zt(e, t, a, n, s, r) {
                return (0, o.uX)(), (0, o.CE)("section", null, [Nt, (0, o.Lk)("div", Bt, [(0, o.Lk)("div", Ot, [(0, o.Lk)("div", Rt, [(0, o.Lk)("div", $t, [(0, o.Lk)("ul", Xt, [(0, o.Lk)("li", Mt, [(0, o.Lk)("button", {
                    class: "nav-link active",
                    id: "towns",
                    "data-tab": "towns",
                    value: "towns",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#all-posts",
                    type: "button",
                    onClick: t[0] || (t[0] = e => n.onTabClick(e))
                }, " Towns ")]), (0, o.Lk)("li", Pt, [(0, o.Lk)("button", {
                    class: "nav-link",
                    id: "users",
                    "data-tab": "users",
                    value: "users",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#all-posts",
                    type: "button",
                    onClick: t[1] || (t[1] = e => n.onTabClick(e))
                }, " Users ")]), (0, o.Lk)("li", Ut, [(0, o.Lk)("button", {
                    class: "nav-link",
                    id: "categories",
                    "data-tab": "categories",
                    value: "categories",
                    "data-bs-toggle": "tab",
                    type: "button",
                    "aria-selected": "false",
                    onClick: t[2] || (t[2] = e => n.onTabClick(e))
                }, " Categories ")]), (0, o.Lk)("li", qt, [(0, o.Lk)("button", {
                    class: "nav-link",
                    id: "specialists",
                    "data-tab": "specialists",
                    "data-bs-toggle": "tab",
                    type: "button",
                    "aria-selected": "false",
                    onClick: t[3] || (t[3] = e => n.onTabClick(e))
                }, " Specialists ")]), (0, o.Lk)("li", Vt, [(0, o.Lk)("button", {
                    class: "nav-link",
                    id: "reviews",
                    "data-tab": "reviews",
                    "data-bs-toggle": "tab",
                    type: "button",
                    "aria-selected": "false",
                    onClick: t[4] || (t[4] = e => n.onTabClick(e))
                }, " Reviews ")]), (0, o.Lk)("li", Kt, [(0, o.Lk)("button", {
                    class: "nav-link",
                    id: "projects",
                    "data-tab": "projects",
                    "data-bs-toggle": "tab",
                    type: "button",
                    "aria-selected": "false",
                    onClick: t[5] || (t[5] = e => n.onTabClick(e))
                }, " Projects ")])])]), (0, o.Lk)("div", Qt, [Jt, (0, o.Lk)("div", zt, [Ht, s.showModal ? ((0, o.uX)(), (0, o.CE)("div", Wt, Yt)) : (0, o.Q3)("", !0)])])])])])])
            }

            var ea = a(4692), ta = a.n(ea), aa = (a(4028), {
                data() {
                    return {showModal: !0}
                }, setup() {
                    const e = (0, O.KR)("towns");
                    let t = (0, O.KR)(null);
                    const a = t => {
                        e.value = t, fetch(`/api/${e.value}/all`).then((e => e.json())).then((e => {
                            ta()(document).ready((function () {
                                ta()("#adminTable").DataTable()
                            })), n();
                            const t = s(e);
                            d(t), u()
                        })).catch((e => {
                            y(e)
                        }))
                    }, n = () => {
                        const e = document.getElementById("tableContainer");
                        e.innerHTML = ""
                    }, s = e => {
                        const t = document.createElement("table");
                        t.id = "adminTable", t.className = "display table-auto w-full border-collapse border border-gray-300 rounded-lg", t.style.width = "100%";
                        const a = r(e[0]);
                        t.innerHTML += a;
                        const n = l(e);
                        return t.appendChild(n), t
                    }, r = e => {
                        let t = '<thead class="bg-blue-200"><tr>';
                        for (let a in e) t += `<th>${a}</th>`;
                        return t += "<th>Actions</th></tr></thead>", t
                    }, i = () => {
                        ta()(".form-dropdown").select2()
                    }, l = e => {
                        const t = document.createElement("tbody");
                        return e.forEach((e => {
                            const a = document.createElement("tr");
                            a.addEventListener("click", (() => b(e)));
                            for (let t in e) {
                                const n = document.createElement("td");
                                n.textContent = "object" === typeof e[t] && void 0 !== e[t].id ? e[t].id : e[t], a.appendChild(n)
                            }
                            const n = c();
                            a.appendChild(n), t.appendChild(a)
                        })), t
                    }, c = () => {
                        const e = document.createElement("td"), t = document.createElement("img");
                        return t.src = "/image/delete.png", t.className = "delete-icon justify-end", t.height = 20, t.width = 20, e.appendChild(t), e
                    }, d = e => {
                        const t = document.getElementById("tableContainer");
                        t.appendChild(e)
                    }, u = () => {
                        document.querySelectorAll(".delete-icon").forEach((e => {
                            e.addEventListener("click", (function () {
                                const e = this.closest("tr"), t = e.querySelector("td:first-child").textContent;
                                v(t)
                            }))
                        }))
                    }, m = e => {
                        const t = e.target.getAttribute("data-tab");
                        a(t), g()
                    }, p = () => {
                        const a = new FormData(document.getElementById("createForm")), n = {};
                        for (const [e, t] of Object.entries(Object.fromEntries(a.entries()))) n[e] = t;
                        fetch(`/api/${e.value}/${t}`, {
                            method: "PUT",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(n)
                        }).then((e => {
                            e.ok ? w() : y()
                        })).catch((e => {
                            y(e)
                        }))
                    }, f = t => {
                        fetch(`/api/${e.value}/${t}`, {method: "DELETE"}).then((() => {
                            w(), a(e.value)
                        })).catch((e => {
                            y(e)
                        }))
                    }, v = e => {
                        nt().fire({
                            title: "Ви впевнені?",
                            text: "Після видалення цього запису всі інші записи, що мають посилання на нього, також будуть видалені.",
                            icon: "warning",
                            showCancelButton: !0,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Так, видалити!",
                            cancelButtonText: "Відмінити"
                        }).then((t => {
                            t.isConfirmed && f(e)
                        }))
                    }, h = async () => {
                        try {
                            const t = new FormData(document.getElementById("createForm")), a = {};
                            for (const [e, o] of Object.entries(Object.fromEntries(t.entries()))) a[e] = o;
                            const n = await R.A.post(`/api/${e.value}`, a, {returnPromise: !1});
                            200 === n.status ? w() : y()
                        } catch (t) {
                            y(t)
                        }
                    }, b = e => {
                        k(e)
                    }, k = e => {
                        try {
                            const a = document.getElementById("createForm");
                            for (let n in e) if ("id" !== n) {
                                const t = a.querySelector(`#${n}`);
                                t && (t.value = "object" === typeof e[n] && void 0 !== e[n].id ? e[n].id : e[n])
                            } else t = e[n]
                        } catch (a) {
                            y(a)
                        }
                    }, g = async () => {
                        try {
                            const t = await fetch(`/api/${e.value}/all`), a = await t.json();
                            if (a.length > 0) {
                                const e = a[0];
                                let t = '<form id="createForm">';
                                for (let a in e) if ("id" !== a) if (a.endsWith("Id")) {
                                    t += `<label for="${a}">${a}</label>`, t += `<select id="${a}" name="${a}" class="form-dropdown w-select w-[300px]">`;
                                    let e = `/api/${a}`;
                                    e = "categoryId" === a ? "/api/categories" : `/api/${a.replace("Id", "s")}`;
                                    const n = await fetch(e + "/all"), o = await n.json();
                                    o.forEach((e => {
                                        let a = "";
                                        if ("object" === typeof e) for (let t in e) "object" === typeof e[t] ? a += `${t}: ${e[t].id}, ` : a += `${t}: ${e[t]}, `; else a = e;
                                        t += `<option value="${e.id}">${a}</option>`
                                    })), t += "</select>"
                                } else t += '<div class="field-block">', t += `<label class="lableField" for="${a}" >${a}</label>`, t += `<input style="margin-top: 0px; margin-bottom: 10px" type="text" id="${a}" name="${a}" class="text-field w-input" value="${e[a]}">`, t += "</div>";
                                t += '<div class="flex justify-center space-x-4 mt-4">', t += '<button id="createButton"  class="button small" style="margin: 5px">Save</button>', t += '<button id="updateButton"  class="button small" style="margin: 5px">Update</button>', t += "</div>", t += "</form>", document.getElementById("createFormContainer").innerHTML = t, document.getElementById("createButton").addEventListener("click", h), document.getElementById("updateButton").addEventListener("click", p), document.getElementById("createFormContainer").style.display = "block"
                            }
                        } catch (t) {
                            y(t)
                        }
                    }, w = () => {
                        nt().fire({title: "Зміни у таблиці виконані", icon: "success", confirmButtonText: "OK"})
                    }, y = () => {
                        nt().fire({title: "Помилка надсилання даних", icon: "error", confirmButtonText: "OK"})
                    };
                    return (0, o.sV)((() => {
                        a("towns"), g(), i()
                    })), {createRecord: h, updateRecord: p, onTabClick: m, deleteRow: f}
                }
            });
            const na = (0, i.A)(aa, [["render", Zt], ["__scopeId", "data-v-528b4bcc"]]);
            var oa = na, sa = {components: {NavBar: U, AdminActions: oa, AppFooter: Te}};
            const ra = (0, i.A)(sa, [["render", It]]);
            var ia = ra;
            const la = {id: "app"}, ca = {class: "page-wrapper"};

            function da(e, t, a, n, s, r) {
                const i = (0, o.g2)("NavBar"), l = (0, o.g2)("TaskForm"), c = (0, o.g2)("AppFooter");
                return (0, o.uX)(), (0, o.CE)("div", la, [(0, o.bF)(i), (0, o.Lk)("div", ca, [(0, o.bF)(l)]), (0, o.bF)(c)])
            }

            const ua = {class: "page-wrapper"}, ma = {class: "section black-gradient"}, pa = {class: "container"},
                fa = {
                    id: "w-node-b49c48ad-b3b4-f319-67e3-9d04be5835dc-7fca7502",
                    class: "text-box _550px center-align"
                }, va = {class: "form-card"},
                ha = (0, o.Lk)("div", {class: "flex justify-center mb-4"}, [(0, o.Lk)("img", {
                    src: "/image/logo-long.png",
                    loading: "lazy",
                    alt: "",
                    width: "300"
                })], -1), ba = (0, o.Lk)("h3", {class: "heading-2 flex justify-center"}, "Деталі послуги", -1),
                ka = {class: "w-form"},
                ga = (0, o.Lk)("label", {for: "First-Name"}, "Що потрібно зробити (коротко)? ", -1),
                wa = {class: "field-block"}, ya = (0, o.Lk)("label", {for: "Message"}, "Детально опишіть послуги", -1),
                La = (0, o.Lk)("h3", {class: "heading-2 flex justify-center"}, "Адреса виконання послуги", -1),
                xa = (0, o.Lk)("label", {for: "First-Name-2"}, "Місто", -1),
                Ca = (0, o.Lk)("option", {value: "", selected: "", disabled: ""}, "Оберіть ваше місто", -1),
                Ea = ["value"], Fa = (0, o.Lk)("label", {for: "First-Name-2"}, "Адреса", -1),
                _a = (0, o.Lk)("h3", {class: "heading-2 flex justify-center"}, "Дата виконання послуги", -1),
                Aa = ["min"], Da = (0, o.Lk)("h3", {class: "heading-2 flex justify-center"}, "Оплата роботи", -1),
                Sa = (0, o.Lk)("label", {for: "First-Name-2"}, "Орієнтовна вартість", -1),
                ja = {class: "w-checkbox checkbox-field"},
                Ia = (0, o.Lk)("span", {class: "checkbox-label w-form-label"}, "Ціна обговорюється", -1),
                Ta = (0, o.Lk)("div", {class: "flex justify-center"}, [(0, o.Lk)("input", {
                    type: "submit",
                    "data-wait": "Please wait...",
                    class: "button no-margin w-button",
                    value: "Створити"
                })], -1),
                Na = (0, o.Lk)("div", {class: "form-success w-form-done"}, [(0, o.Lk)("div", null, "Your request has been submitted and we will get to you shortly.")], -1),
                Ba = (0, o.Lk)("div", {class: "form-error w-form-fail"}, [(0, o.Lk)("div", null, "Oops! Something went wrong. Please fill in the required fields and try again.")], -1);

            function Oa(e, t, a, s, r, i) {
                return (0, o.uX)(), (0, o.CE)("div", ua, [(0, o.Lk)("div", ma, [(0, o.Lk)("div", pa, [(0, o.Lk)("div", fa, [(0, o.Lk)("div", va, [ha, ba, (0, o.Lk)("div", ka, [(0, o.Lk)("form", {
                    id: "new-task-form",
                    onSubmit: t[7] || (t[7] = (0, n.D$)(((...e) => i.submitForm && i.submitForm(...e)), ["prevent"]))
                }, [ga, (0, o.bo)((0, o.Lk)("input", {
                    class: "text-field w-input",
                    maxlength: "256",
                    name: "title",
                    "onUpdate:modelValue": t[0] || (t[0] = e => r.formData.title = e),
                    placeholder: "Заміна вікон",
                    minlength: "5",
                    type: "t",
                    id: "title",
                    required: ""
                }, null, 512), [[n.Jo, r.formData.title]]), (0, o.Lk)("div", wa, [ya, (0, o.bo)((0, o.Lk)("textarea", {
                    minlength: "15",
                    placeholder: "Замінити два вікна 2х1м. Поставити підвіконник, зашпаклювати,винести старі вікна.",
                    maxlength: "5000",
                    "onUpdate:modelValue": t[1] || (t[1] = e => r.formData.description = e),
                    name: "description",
                    id: "description",
                    required: "",
                    class: "text-area w-input"
                }, "\n                  ", 512), [[n.Jo, r.formData.description]]), La, xa, (0, o.bo)((0, o.Lk)("select", {
                    id: "town",
                    "onUpdate:modelValue": t[2] || (t[2] = e => r.formData.town_id = e),
                    name: "town",
                    "data-name": "town",
                    class: "form-dropdown w-select",
                    required: ""
                }, [Ca, ((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(r.towns, (e => ((0, o.uX)(), (0, o.CE)("option", {
                    key: e.id,
                    value: e.id
                }, (0, q.v_)(e.town_name), 9, Ea)))), 128))], 512), [[n.u1, r.formData.town_id]]), Fa]), (0, o.bo)((0, o.Lk)("input", {
                    class: "text-field w-input",
                    minlength: "5",
                    name: "address",
                    "onUpdate:modelValue": t[3] || (t[3] = e => r.formData.address = e),
                    placeholder: "Українська 12",
                    type: "text",
                    id: "address",
                    required: ""
                }, null, 512), [[n.Jo, r.formData.address]]), _a, (0, o.Lk)("div", null, [(0, o.bo)((0, o.Lk)("input", {
                    class: "text-field w-input",
                    minlength: "5",
                    name: "address",
                    "onUpdate:modelValue": t[4] || (t[4] = e => r.formData.date = e),
                    placeholder: "Українська 12",
                    type: "datetime-local",
                    id: "address",
                    required: "",
                    min: i.todayDate
                }, null, 8, Aa), [[n.Jo, r.formData.date]])]), Da, Sa, (0, o.bo)((0, o.Lk)("input", {
                    class: "text-field w-input",
                    maxlength: "256",
                    name: "budget",
                    "onUpdate:modelValue": t[5] || (t[5] = e => r.formData.budget = e),
                    placeholder: "1500грн",
                    type: "number",
                    id: "budget",
                    required: ""
                }, null, 512), [[n.Jo, r.formData.budget]]), (0, o.Lk)("label", ja, [(0, o.bo)((0, o.Lk)("input", {
                    id: "wf-sign-up-accept-privacy",
                    class: "w-checkbox-input check-box",
                    "onUpdate:modelValue": t[6] || (t[6] = e => r.formData.acceptPrivacy = e),
                    "data-name": "Checkbox",
                    "data-wf-user-field": "wf-user-field-accept-privacy",
                    name: "Checkbox",
                    type: "checkbox"
                }, null, 512), [[n.lH, r.formData.acceptPrivacy]]), Ia]), Ta], 32), Na, Ba])])])])])])
            }

            var Ra = {
                computed: {
                    todayDate() {
                        const e = new Date;
                        return e.toISOString().slice(0, 16)
                    }
                }, data() {
                    return {
                        towns: [],
                        formData: {
                            title: "",
                            description: "",
                            town_id: "",
                            address: "",
                            date: "",
                            budget: "",
                            acceptPrivacy: !1
                        }
                    }
                }, mounted() {
                    this.fetchTowns()
                }, methods: {
                    async fetchTowns() {
                        try {
                            const e = await fetch("/api/towns/all");
                            if (!e.ok) throw new Error("Network response was not ok");
                            const t = await e.json();
                            this.towns = t
                        } catch (e) {
                            console.error("Error fetching towns:", e)
                        }
                    }, async submitForm() {
                        this.formData = {
                            title: this.formData.title,
                            description: this.formData.description,
                            townId: this.formData.town_id,
                            address: this.formData.address,
                            date: new Date,
                            budget: this.formData.budget,
                            categoryId: 1,
                            userId: 10
                        }, await R.A.post("/api/projects", this.formData).then((e => {
                            200 === e.status ? nt().fire({
                                title: "Успішно створено запит.",
                                icon: "success",
                                confirmButtonText: "OK"
                            }) : nt().fire({title: "Помилка", icon: "error", confirmButtonText: "OK"})
                        }))
                    }
                }
            };
            const $a = (0, i.A)(Ra, [["render", Oa]]);
            var Xa = $a, Ma = {components: {TaskForm: Xa, NavBar: U, AppFooter: Te}};
            const Pa = (0, i.A)(Ma, [["render", da]]);
            var Ua = Pa;
            const qa = {id: "app"};

            function Va(e, t, a, n, s, r) {
                const i = (0, o.g2)("NavBar"), l = (0, o.g2)("UserProjects"), c = (0, o.g2)("AppFooter");
                return (0, o.uX)(), (0, o.CE)("div", qa, [(0, o.bF)(i), (0, o.bF)(l), (0, o.bF)(c)])
            }

            const Ka = {class: "section light-grey"}, Qa = {class: "container"}, Ja = {class: "terms-card"},
                za = {class: "content-center"},
                Ha = {class: "nav nav-tabs position-relative", id: "tables", role: "tablist"},
                Wa = {class: "nav-item", role: "presentation"}, Ga = {class: "nav-item", role: "presentation"},
                Ya = {class: "nav-item", role: "presentation"}, Za = {class: "content-center"},
                en = {class: "content-center"}, tn = {key: 0}, an = {class: "card-title"}, nn = {class: "card-text"},
                on = {class: "card-text"}, sn = {class: "card-text"}, rn = {class: "content-center"}, ln = {key: 1};
            var cn = {
                __name: "UserProjects", setup(e) {
                    const t = (0, O.KR)("accepted"), a = (0, O.KR)([]);

                    async function n(e) {
                        try {
                            const t = await R.A.get(`/api/projects/user/2/${e}`);
                            a.value = t.data
                        } catch (t) {
                            console.error(t)
                        }
                    }

                    function s() {
                        window.location.href = "/new-task"
                    }

                    function r() {
                        window.location.href = "/create-review"
                    }

                    function i(e) {
                        t.value = e.target.value, n(t.value)
                    }

                    return (0, o.sV)((async () => {
                        await n(t.value)
                    })), (e, n) => ((0, o.uX)(), (0, o.CE)("section", null, [(0, o.Lk)("div", Ka, [(0, o.Lk)("div", Qa, [(0, o.Lk)("div", Ja, [(0, o.Lk)("div", za, [(0, o.Lk)("ul", Ha, [(0, o.Lk)("li", {
                        class: "nav-item",
                        role: "presentation"
                    }, [(0, o.Lk)("button", {
                        class: "nav-link",
                        id: "archive",
                        "data-tab": "archive",
                        value: "archive",
                        "data-bs-toggle": "tab",
                        type: "button",
                        "aria-selected": "false",
                        onClick: s
                    }, " + ")]), (0, o.Lk)("li", Wa, [(0, o.Lk)("button", {
                        class: "nav-link active",
                        id: "accepted",
                        "data-tab": "accepted",
                        value: "accepted",
                        "data-bs-toggle": "tab",
                        "data-bs-target": "#all-posts",
                        type: "button",
                        onClick: n[0] || (n[0] = e => i(e))
                    }, " В роботі ")]), (0, o.Lk)("li", Ga, [(0, o.Lk)("button", {
                        class: "nav-link",
                        id: "await",
                        "data-tab": "await",
                        value: "await",
                        "data-bs-toggle": "tab",
                        "data-bs-target": "#all-posts",
                        type: "button",
                        onClick: n[1] || (n[1] = e => i(e))
                    }, " Очікують спеціаліста ")]), (0, o.Lk)("li", Ya, [(0, o.Lk)("button", {
                        class: "nav-link",
                        id: "archive",
                        "data-tab": "archive",
                        value: "archive",
                        "data-bs-toggle": "tab",
                        type: "button",
                        "aria-selected": "false",
                        onClick: n[2] || (n[2] = e => i(e))
                    }, " Архів послуг ")])])]), (0, o.Lk)("div", Za, [(0, o.Lk)("section", null, [(0, o.Lk)("div", en, [a.value.length > 0 ? ((0, o.uX)(), (0, o.CE)("div", tn, [((0, o.uX)(!0), (0, o.CE)(o.FK, null, (0, o.pI)(a.value, (e => ((0, o.uX)(), (0, o.CE)("div", {
                        key: e.id,
                        class: "card"
                    }, [(0, o.Lk)("h5", an, (0, q.v_)(e.title), 1), (0, o.Lk)("p", nn, "Опис: " + (0, q.v_)(e.description), 1), (0, o.Lk)("p", on, "Бюджет: " + (0, q.v_)(e.budget), 1), (0, o.Lk)("p", sn, "Статус: " + (0, q.v_)(e.status), 1), (0, o.Lk)("div", rn, ["accepted" === t.value ? ((0, o.uX)(), (0, o.CE)("button", {
                        key: 0,
                        onClick: r,
                        class: "button w-button",
                        style: {width: "200px"}
                    }, "Відгук")) : (0, o.Q3)("", !0)])])))), 128))])) : ((0, o.uX)(), (0, o.CE)("p", ln, "Немає послуг"))])])])])])])]))
                }
            };
            const dn = (0, i.A)(cn, [["__scopeId", "data-v-47b4a69e"]]);
            var un = dn, mn = {components: {NavBar: U, UserProjects: un, AppFooter: Te}};
            const pn = (0, i.A)(mn, [["render", Va], ["__scopeId", "data-v-78809ed8"]]);
            var fn = pn;
            const vn = {id: "app"};

            function hn(e, t, a, n, s, r) {
                const i = (0, o.g2)("NavBar"), l = (0, o.g2)("ReviewForm"), c = (0, o.g2)("AppFooter");
                return (0, o.uX)(), (0, o.CE)("div", vn, [(0, o.bF)(i), (0, o.bF)(l), (0, o.bF)(c)])
            }

            const bn = {class: "section black-gradient"}, kn = {class: "container"}, gn = {
                    id: "w-node-b49c48ad-b3b4-f319-67e3-9d04be5835dc-7fca7502",
                    class: "text-box _550px center-align"
                }, wn = {class: "form-card"}, yn = (0, o.Lk)("div", {class: "flex justify-center mb-4"}, [(0, o.Lk)("img", {
                    src: "/image/logo-long.png",
                    loading: "lazy",
                    alt: "",
                    width: "300"
                })], -1), Ln = (0, o.Lk)("h3", {class: "heading-2 flex justify-center"}, "Вігук про виконання послуги", -1),
                xn = {class: "w-form"}, Cn = {class: "paragraph small"}, En = {class: "paragraph small"},
                Fn = (0, o.Lk)("div", {class: "flex justify-center"}, [(0, o.Lk)("input", {
                    type: "submit",
                    "data-wait": "Please wait...",
                    class: "button no-margin w-button",
                    value: "Створити"
                })], -1);

            function _n(e, t, a, s, r, i) {
                const l = (0, o.g2)("StarRating");
                return (0, o.uX)(), (0, o.CE)("div", bn, [(0, o.Lk)("div", kn, [(0, o.Lk)("div", gn, [(0, o.Lk)("div", wn, [yn, Ln, (0, o.Lk)("div", xn, [(0, o.Lk)("form", {
                    id: "new-task-form",
                    onSubmit: t[2] || (t[2] = (0, n.D$)(((...e) => i.submitForm && i.submitForm(...e)), ["prevent"]))
                }, [(0, o.bo)((0, o.Lk)("textarea", {
                    minlength: "15",
                    placeholder: "Все пройшло дуже добре. Рекомендую цього спеціаліста",
                    maxlength: "5000",
                    "onUpdate:modelValue": t[0] || (t[0] = e => r.formData.comment = e),
                    name: "comment",
                    id: "comment",
                    required: "",
                    class: "text-area w-input"
                }, "\n                  ", 512), [[n.Jo, r.formData.comment]]), (0, o.Lk)("div", Cn, [(0, o.Lk)("div", En, [(0, o.bF)(l, {
                    modelValue: r.formData.rating,
                    "onUpdate:modelValue": t[1] || (t[1] = e => r.formData.rating = e),
                    rating: 5,
                    increment: .5,
                    "star-size": 20,
                    "active-color": "#FFD700",
                    "inactive-color": "#C0C0C0",
                    onInput: i.handleRatingChange
                }, null, 8, ["modelValue", "onInput"])])]), Fn], 32)])])])])])
            }

            var An = {
                components: {StarRating: xe()}, data() {
                    return {formData: {userId: 10, specialistId: 10, projectId: 10, rating: 5}}
                }, mounted() {
                }, methods: {
                    handleRatingChange(e) {
                        console.log("Новий рейтинг:", e)
                    }, async submitForm() {
                        this.formData = {
                            comment: this.formData.comment,
                            rating: this.formData.rating,
                            datePosted: this.todayDate(),
                            userId: 10,
                            specialistId: 10,
                            projectId: 10
                        }, console.log(this.formData), await R.A.post("/api/reviews", this.formData).then((e => {
                            200 === e.status ? nt().fire({
                                title: "Успішно створено відгук.",
                                icon: "success",
                                confirmButtonText: "OK"
                            }).then((e => {
                                e.isConfirmed && (window.location.href = "/dash-board")
                            })) : nt().fire({title: "Помилка", icon: "error", confirmButtonText: "OK"})
                        }))
                    }, todayDate() {
                        const e = new Date;
                        return e.toISOString().slice(0, 16)
                    }
                }
            };
            const Dn = (0, i.A)(An, [["render", _n]]);
            var Sn = Dn, jn = {components: {ReviewForm: Sn, NavBar: U, AppFooter: Te}};
            const In = (0, i.A)(jn, [["render", hn]]);
            var Tn = In;
            const Nn = [{path: "/home", name: "HomePage", component: Oe}, {
                path: "/sign-up",
                name: "SignUp",
                component: lt
            }, {path: "/log-in", name: "LogIn", component: yt}, {
                path: "/access-denied",
                name: "AccessDenied",
                component: St
            }, {path: "/admin-panel", name: "AdminPanel", component: ia}, {
                path: "/dashboard",
                name: "UserDashboard",
                component: fn
            }, {path: "/create-review", name: "CreateReview", component: Tn}, {
                path: "/new-task",
                name: "NewTask",
                component: Ua
            }], Bn = (0, u.aE)({history: (0, u.LA)(), routes: Nn});
            var On = Bn, Rn = (a(5668), a(414), a(5957));
            (0, n.Ef)(d).use(On).use(Rn.Ay).mount("#app")
        }
    }, t = {};

    function a(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var s = t[n] = {exports: {}};
        return e[n].call(s.exports, s, s.exports, a), s.exports
    }

    a.m = e, function () {
        var e = [];
        a.O = function (t, n, o, s) {
            if (!n) {
                var r = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    n = e[d][0], o = e[d][1], s = e[d][2];
                    for (var i = !0, l = 0; l < n.length; l++) (!1 & s || r >= s) && Object.keys(a.O).every((function (e) {
                        return a.O[e](n[l])
                    })) ? n.splice(l--, 1) : (i = !1, s < r && (r = s));
                    if (i) {
                        e.splice(d--, 1);
                        var c = o();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            s = s || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
            e[d] = [n, o, s]
        }
    }(), function () {
        a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return a.d(t, {a: t}), t
        }
    }(), function () {
        a.d = function (e, t) {
            for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
        }
    }(), function () {
        a.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(), function () {
        a.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }
    }(), function () {
        a.p = "/"
    }(), function () {
        var e = {524: 0};
        a.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, n) {
            var o, s, r = n[0], i = n[1], l = n[2], c = 0;
            if (r.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (o in i) a.o(i, o) && (a.m[o] = i[o]);
                if (l) var d = l(a)
            }
            for (t && t(n); c < r.length; c++) s = r[c], a.o(e, s) && e[s] && e[s][0](), e[s] = 0;
            return a.O(d)
        }, n = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    }();
    var n = a.O(void 0, [504], (function () {
        return a(6999)
    }));
    n = a.O(n)
})();
//# sourceMappingURL=app.1de894f0.js.map