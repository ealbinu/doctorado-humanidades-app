
const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ],
    meta: { forAuth: false }
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
    ],
    meta: { forAuth: true }
  },
  {
    path: '/desempeno',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/desempeno/:id', component: () => import('pages/Desempeno.vue') },
    ],
    meta: { forAuth: true, group: ['docente', 'estudiante'] }
  },
  {
    path: '/configuracion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UserManager.vue') },
      { path: '/estudiantes', component: () => import('pages/coordinador/Estudiantes.vue') },
      { path: '/docentes', component: () => import('pages/coordinador/Docentes.vue') },
      //Previous
      { path: '/estudiantes2', component: () => import('pages/UserManager.vue') },
      { path: '/docentes2', component: () => import('pages/UserManager.vue') },
    ],
    meta: { forAuth: true, group: ['admin', 'coordinador'] }
  },
  {
    path: '/estudiante',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/estudiante/:id', component: () => import('pages/coordinador/Estudiante.vue') },
      { path: '/estudiantepre/:id', component: () => import('pages/EstudianteManager.vue') },
    ],
    meta: { forAuth: true, group: ['admin', 'coordinador'] }
  },
  {
    path: '/docente',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/docente/:id', component: () => import('pages/coordinador/Docente.vue') },
      { path: '/docentepre/:id', component: () => import('pages/DocenteManager.vue') },
    ],
    meta: { forAuth: true, group: ['admin', 'coordinador'] }
  },
  {
    path: '/periodos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Periodos.vue') },
    ],
    meta: { forAuth: true,  group: ['admin', 'coordinador'] }
  },
  {
    path: '/periodo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/periodo/:id', component: () => import('pages/estudiantePeriodoDesempeno.vue') },
    ],
    meta: { forAuth: true,  group: ['estudiante'] }
  },
  {
    path: '/periodos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Periodos.vue') },
    ],
    meta: { forAuth: true,  group: ['admin', 'coordinador'] }
  },
  {
    path: '/generaciones',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Generaciones.vue') },
    ],
    meta: { forAuth: true,  group: ['admin', 'coordinador'] }
  },
  {
    path: '/reportesconacyt',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ReportesConacyt.vue') },
    ],
    meta: { forAuth: true,  group: ['admin', 'coordinador'] }
  },
  {
    path: '/mi-cuenta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MiCuenta.vue') },
    ],
    meta: { forAuth: true,  group: ['admin', 'coordinador', 'docente'] }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
