# Website Migration Notes

## Summary
Migrated personal website from Joe Lannan's template to David Calvert's information.

## Latest Updates
- Removed profile image (images/profile.jpg)
- Removed Joe's images (spirostomum.jpg, koinslot-logo.png)
- Expanded all content to highlight: numerical methods, finite volume schemes, HPC, software development, mathematics, 3D printing
- Updated GitHub username to djswizzy
- Updated website URL to davidcalvert.dev

## Completed Tasks

### 1. Updated Personal Information
- Name: David Calvert
- Email: djcalve2@berkeley.edu
- GitHub: djswizzy
- Website URL: https://davidcalvert.dev
- Location: San Francisco, CA

### 2. Files Updated with Your Information
- `_config.yml` - Site settings, URL, GitHub username
- `_pages/about.md` - Homepage with your bio, research, experience
- `_pages/cv.md` - Full CV from your resume
- `_pages/portfolio.md` - Projects and skills
- `_pages/companies.md` - Work experience details
- `_pages/publications-auto.md` - Your publications
- `_pages/research.md` - Research focus (MHD, supernovae)
- `_pages/github-projects.md` - Updated description
- `_data/cv.json` - Structured CV data
- `_data/authors.yml` - Author profile
- `README.md` - Updated for your site

### 3. JavaScript Files Updated
- `assets/js/github-heatmap.js` - GitHub username → djswizzy
- `assets/js/github-projects.js` - GitHub username → djswizzy
- `assets/js/publications.js` - Cleared Joe's sample data
- `assets/js/knowledge-graph-data.json` - Reset to empty
- `scripts/generate-repo-data.sh` - Updated to fetch from djswizzy

### 4. Files Deleted (Joe Lannan-specific)
- All blog posts about Spirostomum/biophysics research
- All knowledgemap entries about his research
- His resume PDFs and diploma files (`files/Diplomas/Joe_Lannan_*.pdf`)
- His resume (`files/Resume_CV_Joseph_Lannan.pdf`)
- Old resume HTML (`files/OldResumeHTML/ResumeCVJosephLannan.html`)
- GitHub repo data files (`assets/data/joe-lannan-repos.json`, `assets/data/koinslot-inc-repos.json`)

### 5. Your Resume
- Located at: `files/Resume.pdf`
- Content extracted and used to populate all pages

## Remaining Tasks

### 1. Commit and Push Changes
```bash
cd /Users/dcal/Documents/personal-website
git add -A
git commit -m "Migrate website to David Calvert"
git push
```

### 2. Check GitHub Pages Settings
After pushing, go to:
`https://github.com/djswizzy/personal-website/settings/pages`

- Ensure "Custom domain" is set to `davidcalvert.dev`
- If it shows `davidcalvert.me`, change it to `davidcalvert.dev`

### 3. Optional: Add Profile Photo
- Add your photo as `images/profile.jpg`

### 4. Optional: Add Social Links
In `_config.yml`, you can add:
- LinkedIn username
- Google Scholar URL
- ORCID
- Twitter/X
- etc.

### 5. Optional: Generate GitHub Repo Data
```bash
./scripts/generate-repo-data.sh
```
(May need a GitHub token for rate limits)

## Issue to Investigate
Links were redirecting to `davidcalvert.me` - this is likely:
1. Browser cache (try incognito mode)
2. GitHub Pages custom domain setting needs to be updated
3. DNS configuration if you have redirects set up

## Files with Uncommitted Changes
Run `git status` to see current state. As of last check:
- `_config.yml`
- `_data/authors.yml`
- `_data/cv.json`
- `_pages/portfolio.md`
- `assets/js/github-heatmap.js`
- `assets/js/github-projects.js`
- `scripts/generate-repo-data.sh`
