# Migration Checklist for Future Updates

## Quick Reference - What We Changed

### ✅ Completed Changes (August 31, 2025)

#### Package Manager
- [x] Using Bun v1.2.21
- [x] Removed `package-lock.json`
- [x] Keeping `bun.lockb` for dependency tracking

#### Major Version Upgrades
- [x] Next.js 14 → 15.5.2
- [x] React 18 → 19.1.1
- [x] ESLint 8 → 9.34.0
- [x] next-themes 0.2 → 0.4.6

#### Configuration Files
- [x] Added `"type": "module"` to package.json
- [x] Renamed `postcss.config.js` → `postcss.config.cjs` (CommonJS compatibility)
- [x] Created `.gitignore` with comprehensive patterns
- [x] Added `.env.example` with required variables
- [x] Added `.eslintrc.json` for ESLint config

#### Code Fixes
- [x] Fixed `useRef` TypeScript issue in `providers.tsx`
- [x] Updated dark mode opacity in `page.tsx`

## For Next Update - Check These First

### 1. Before Starting
```bash
# Check current versions
bun outdated

# Backup current working state
git add -A
git commit -m "Backup before update"
```

### 2. Common Issues to Watch For

#### PostCSS/Tailwind Issues
- **File**: `postcss.config.cjs` (NOT .js)
- **Why**: Must be CommonJS with `"type": "module"`

#### TypeScript Strict Mode
- Check `useRef` initializations
- Ensure proper typing for undefined states

#### Lock Files
- Use ONLY `bun.lockb`
- Delete any `package-lock.json` or `yarn.lock`

### 3. Test Sequence After Updates
```bash
# 1. Install dependencies
bun install

# 2. Test dev server
bun run dev
# Check: http://localhost:3000 loads

# 3. Test production build
NEXT_PUBLIC_SITE_URL=https://example.com bun run build

# 4. Run linter
bun run lint
```

## Breaking Changes to Review

### Next.js 15 (Current)
- ✅ Async request APIs
- ✅ New caching behavior
- ✅ Updated middleware handling

### React 19 (Current)
- ✅ Automatic batching
- ✅ New Suspense features
- ✅ Strict mode improvements

### Future Considerations

#### Next.js 16+ (When available)
- [ ] Check App Router changes
- [ ] Review Server Components updates
- [ ] Test new optimization features

#### React 20+ (When available)
- [ ] Review hooks changes
- [ ] Check concurrent features
- [ ] Test form handling updates

#### Tailwind CSS v5+ (When available)
- [ ] Review config migration
- [ ] Check for PostCSS updates
- [ ] Test new utility classes

## Quick Fix Reference

### Error: "module is not defined in ES module scope"
```bash
# Rename config files to .cjs
mv postcss.config.js postcss.config.cjs
mv tailwind.config.js tailwind.config.cjs  # if needed
```

### Error: "Cannot find module"
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
```

### Error: "Type error in useRef"
```typescript
// Change from:
const ref = useRef<T>()
// To:
const ref = useRef<T | undefined>(undefined)
```

## Files That Often Need Updates

1. **package.json** - Dependency versions
2. **tsconfig.json** - TypeScript config
3. **next.config.mjs** - Next.js configuration
4. **postcss.config.cjs** - PostCSS setup
5. **.eslintrc.json** - Linting rules

## Success Indicators

✅ Dev server starts without errors
✅ Production build completes
✅ No TypeScript errors
✅ ESLint passes
✅ Pages load with styles applied
✅ Dark mode toggles work

## Contact for Template Updates

- **Template**: Tailwind Plus - Spotlight
- **Purchase Date**: Check Tailwind Plus account
- **Updates**: Free forever with purchase
- **Download**: https://tailwindcss.com/plus (login required)

---
*Created: August 31, 2025*
*Purpose: Quick reference for future updates*