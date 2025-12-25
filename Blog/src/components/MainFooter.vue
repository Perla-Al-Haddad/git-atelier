<template>
    <footer>
        <div class="container">
            <div class="navbar navbar-expand-lg bg-dark py-1">
                <ul class="navbar-nav navbar-dark mb-2 mb-lg-0 gap-3 align-items-center justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link text-gray" href="mailto:perlaalhaddad@gmail.com">perlaalhaddad@gmail.com</a>
                    </li>
                    <li class="nav-item text-gray-light">
                        Copyright © {{ new Date().getFullYear() }}
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top: 1.5px solid var(--bl-dark-soft);
}

.navbar {
    border: none;
}
</style>
