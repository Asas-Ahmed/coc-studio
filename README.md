# ASAS CoC Studio

> A beautiful, modular desktop workspace for **CoC**, built by **ASAS Lab**.

**ASAS CoC Studio** is an extensible desktop application designed to bring the tools, workflows, utilities, and ideas around CoC into one polished workspace.

Built with **Go + Wails + React + TypeScript**, CoC Studio is designed from the ground up to keep growing.

---

## ✨ Vision

CoC Studio isn't meant to be just another utility.

The goal is to build a **single, powerful workspace** where new tools and workflows can be added without turning the application into an unmaintainable monolith.

Everything is organized around independent feature modules, allowing CoC Studio to continuously evolve as new ideas are added.

---

## 🧩 Architecture

CoC Studio follows a **feature-first architecture**.

```text
coc-studio/
│
├── cmd/
│   └── main.go
│
├── backend/
│   ├── app/
│   ├── internal/
│   ├── repository/
│   ├── infrastructure/
│   └── shared/
│
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── shell/
│       │   ├── router/
│       │   ├── store/
│       │   └── providers/
│       │
│       ├── features/
│       │   ├── dashboard/
│       │   ├── projects/
│       │   ├── tools/
│       │   └── settings/
│       │
│       ├── shared/
│       │   ├── components/
│       │   ├── api/
│       │   ├── hooks/
│       │   ├── types/
│       │   └── utils/
│       │
│       └── styles/
│
└── build/
```

### Why feature-first?

A new feature should be able to live mostly inside its own module:

```text
features/
└── my-feature/
    ├── pages/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types.ts
    └── index.ts
```

This keeps the application scalable as the number of tools and pages grows.

---

## 🛠️ Tech Stack

| Layer             | Technology                |
| ----------------- | ------------------------- |
| Desktop framework | Wails                     |
| Backend           | Go                        |
| Frontend          | React                     |
| Language          | TypeScript                |
| Build tool        | Vite                      |
| Persistence       | SQLite-ready architecture |
| UI                | Custom component system   |
| Platform          | Windows / macOS / Linux   |

---

## 🚀 Planned Systems

CoC Studio is being designed around several core systems.

* [ ] Theme system

The list will evolve as CoC Studio grows.

---

## 🏗️ Development Philosophy

### Keep Wails bindings thin

Frontend:

```text
React
  ↓
Feature Service
  ↓
Wails API
  ↓
Go Service
  ↓
Repository / Infrastructure
```

Business logic should not be buried inside React components or Wails bindings.

### Keep features isolated

Features should communicate through stable public interfaces rather than importing each other's internal implementation.

### Don't over-engineer early

New infrastructure should be introduced when an actual feature needs it.

The architecture is designed to make growth easy without building a huge framework before the application exists.

---

## 📦 Getting Started

### Requirements

* Go
* Node.js
* npm
* Wails

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Run development

```bash
wails dev
```

### Build

```bash
wails build
```

---

## 🗂️ Adding a New Feature

Create a feature module:

```text
frontend/src/features/example/
├── pages/
├── components/
├── hooks/
├── services/
├── types.ts
└── index.ts
```

If it requires backend functionality:

```text
backend/internal/example/
├── service.go
├── repository.go
└── types.go
```

Expose only the required operations through the application facade.

---

## 🎨 Product

**ASAS CoC Studio**

Short name:

**CoC Studio**

Brand:

**ASAS Lab**

---

## 🧪 Status

> 🚧 Early development

The project is currently establishing the core architecture and application shell.

Expect APIs, UI, and internal architecture to change while the foundation is being developed.

---

## 🤝 Contributing

Contributions, ideas, architecture discussions, and feature proposals are welcome.

Before implementing a large feature, please open an issue or discussion so the architecture can be considered first.

---

## 📄 License

MIT

---

**ASAS Lab · Building CoC Studio**
