package com.fanta.fixify;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FixifyController {

    @GetMapping("/")
    public String home() {
        return "resources"; // Повернення назви HTML файлу без розширення
    }
    @Controller
    public class ResourcesController {

        @GetMapping("/resources")
        public String showSignUpForm() {
            return "resources"; // Назва шаблону (наприклад, sign-up.html) для відображення форми реєстрації
        }

    }
    @Controller
    public class SignUpController {

        @GetMapping("/sign-up")
        public String showSignUpForm() {
            return "sign-up"; // Назва шаблону (наприклад, sign-up.html) для відображення форми реєстрації
        }

    }
    @Controller
    public class LogInController {

        @GetMapping("/log-in")
        public String showSignUpForm() {
            return "log-in"; // Назва шаблону (наприклад, sign-up.html) для відображення форми реєстрації
        }

    }

    @Controller
    public class ResetPasswordController {

        @GetMapping("/reset-password")
        public String showSignUpForm() {
            return "reset-password"; // Назва шаблону (наприклад, sign-up.html) для відображення форми реєстрації
        }

    }
}
