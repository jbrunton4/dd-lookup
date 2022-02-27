# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.3] - 2022-02-27

### Changed
- Algorithm for search indexing. Previously would return all records containing
the search term, sorted by decimal code. Now, returns all records containing the search term,
prioritising those that begin with the search term, then sorting by decimal code.

## [1.0.2] - 2022-02-25

### Added

-   More detailed error messages when an invalid number search is performed
-   A funding page with links to charities
- Favicon to all pages
- Separate HTML page for mobile, that users will be sent to automatically

### Fixed

-   A bug where search results would appear more than once

## [1.0.1] - 2022-02-24

### Changed

-   Added a line break above the search bar to make the centre div vertically
    more symmetrical

## [1.0.0] - 2022-02-24

### Added

-   Basic files and functionality.
