<template>
    <div class="input-group col-6 search-box">
        <input class="form-control bg-gray" type="search" placeholder="Search..." id="example-search-input">
        <span class="input-group-append">
            <button class="btn bg-gray" type="button">
                <svg class="search-icon" width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z">
                    </path>
                </svg>
            </button>
        </span>
    </div>
</template>

<style scoped>
.search-box {
    width: 200px;
}

.search-icon {
    fill: white;
    stroke: white;
}

.form-control {
    border: none;
    font-size: 0.9rem;
    color: white;
}

.form-control::placeholder {
    color: var(--bl-dark-light) !important;
}
</style>
